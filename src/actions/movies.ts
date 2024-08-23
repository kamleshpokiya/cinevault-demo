"use server";

import prisma from "@/prisma"; // Adjust the import path based on your project structure
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { v4 as uuidv4 } from "uuid"; // For generating unique filenames
import { MoviesResponse } from "./types";
import { revalidatePath } from "next/cache";

export const addMovie = async (formData: FormData) => {
  try {
    const title = formData.get("title") as string;
    const year = formData.get("year") as string;
    const image = formData.get("image") as File;

    // Validate inputs
    if (!title || !year || !image) {
      throw new Error("All fields (title, year, image) are required.");
    }

    // Convert image to base64 string
    const buffer = Buffer.from(await image.arrayBuffer());
    const base64Image = buffer.toString("base64");

    // Store the base64 image and other data in the database
    const newMovie = await prisma.movie.create({
      data: {
        title,
        year: parseInt(year, 10), // Parse the year as an integer
        image: base64Image, // Store base64 string
      },
    });

    return newMovie;
  } catch (error) {
    console.error("Failed to add movie:", error);
    throw new Error("Failed to add movie.");
  }
};

export const updateMovie = async (formData: FormData) => {
  console.log("hell -0 ", formData);

  try {
    const id = formData.get("id") as string;
    const title = formData.get("title") as string | null;
    const year = formData.get("year") as string | null;
    const image = formData.get("image") as File | null;

    // Validate inputs
    if (!id) {
      console.log("hell -1 ");

      throw new Error("Movie ID is required.");
    }
    console.log("hell -2 ");

    // Retrieve current movie to get the old image path
    const existingMovie = await prisma.movie.findUnique({
      where: { id },
    });
    console.log("hell -3 ", existingMovie);

    if (!existingMovie) {
      console.log("hell -4 ");

      throw new Error("Movie not found.");
    }

    // Prepare update data
    const updateData: { title?: string; year?: number; image?: string } = {};
    console.log("hell -5 ");

    if (title) {
      updateData.title = title;
    }
    if (year) {
      updateData.year = parseInt(year, 10); // Parse the year as an integer
    }
    if (image) {
      // Generate a unique filename
      const fileExtension = image.name.split(".").pop();
      const fileName = `${uuidv4()}.${fileExtension}`;
      const filePath = join(process.cwd(), "public", "uploads", fileName);

      // Save the new image file to the server
      const buffer = Buffer.from(await image.arrayBuffer());
      await writeFile(filePath, buffer);

      // Update the image path
      updateData.image = `/uploads/${fileName}`;

      // Remove the old image file from the server
      if (existingMovie.image) {
        const oldImagePath = join(process.cwd(), "public", existingMovie.image);
        try {
          await unlink(oldImagePath);
        } catch (error) {
          console.error("Failed to delete old image:", error);
        }
      }
    }
    console.log("hell -6 ");

    // Update the movie in the database
    const updatedMovie = await prisma.movie.update({
      where: { id },
      data: updateData,
    });
    revalidatePath("/home");
    return updatedMovie;
  } catch (error) {
    console.error("Failed to update movie:", error);
    throw new Error("Failed to update movie.");
  }
};

interface PaginationParams {
  page: number;
  limit: number;
}

export const getMovies = async ({
  page,
  limit,
}: PaginationParams): Promise<MoviesResponse> => {
  try {
    // Calculate the offset
    const offset = (page - 1) * limit;

    // Retrieve movies with pagination
    const [movies, totalCount] = await Promise.all([
      prisma.movie.findMany({
        skip: offset,
        take: limit,
        orderBy: {
          createdAt: "desc", // Adjust sorting if needed
        },
      }),
      prisma.movie.count(), // Get the total number of movies
    ]);

    // Calculate total pages
    const totalPages = Math.ceil(totalCount / limit);

    return {
      status: true,
      movies,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
      },
    };
  } catch (error) {
    console.error("Failed to get movies:", error);
    return {
      status: false,
      error: "Failed to get movies.",
    };
  }
};

export const getMovieById = async (id: string) => {
  try {
    // Validate ID
    if (!id) {
      return { status: false, error: "Plese provide a valid ID" };
    }

    // Retrieve the movie from the database
    const movie = await prisma.movie.findUnique({
      where: { id },
    });

    // Handle case where movie is not found
    if (!movie) {
      return { status: false, error: "Movie not found" };
    }
    return { status: true, movie };
  } catch (error) {
    console.error("Failed to get movie by ID:", error);
    return {
      status: false,
      error: "Something went wrong. Please try again later!",
    };
  }
};
