"use server";

import prisma from "@/prisma"; // Adjust the import path based on your project structure
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { v4 as uuidv4 } from "uuid"; // For generating unique filenames

export const addMovie = async (formData: FormData) => {
  try {
    const title = formData.get("title") as string;
    const year = formData.get("year") as string;
    const image = formData.get("image") as File;

    // Validate inputs
    if (!title || !year || !image) {
      throw new Error("All fields (title, year, image) are required.");
    }

    // Generate a unique filename
    const fileExtension = image.name.split(".").pop();
    const fileName = `${uuidv4()}.${fileExtension}`;
    const filePath = join(process.cwd(), "public", "uploads", fileName);

    // Save the image file to the server
    const buffer = Buffer.from(await image.arrayBuffer());
    await writeFile(filePath, buffer);

    // Store the file path in the database
    const newMovie = await prisma.movie.create({
      data: {
        title,
        year: parseInt(year, 10), // Parse the year as an integer
        image: `/uploads/${fileName}`, // Store relative path
      },
    });

    return newMovie;
  } catch (error) {
    console.error("Failed to add movie:", error);
    throw new Error("Failed to add movie.");
  }
};

export const updateMovie = async (formData: FormData) => {
  try {
    const id = formData.get("id") as string;
    const title = formData.get("title") as string | null;
    const year = formData.get("year") as string | null;
    const image = formData.get("image") as File | null;

    // Validate inputs
    if (!id) {
      throw new Error("Movie ID is required.");
    }

    // Retrieve current movie to get the old image path
    const existingMovie = await prisma.movie.findUnique({
      where: { id },
    });

    if (!existingMovie) {
      throw new Error("Movie not found.");
    }

    // Prepare update data
    const updateData: { title?: string; year?: number; image?: string } = {};

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

    // Update the movie in the database
    const updatedMovie = await prisma.movie.update({
      where: { id },
      data: updateData,
    });

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

export const getMovies = async ({ page, limit }: PaginationParams) => {
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
      movies,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
      },
    };
  } catch (error) {
    console.error("Failed to get movies:", error);
    throw new Error("Failed to get movies.");
  }
};
