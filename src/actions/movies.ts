"use server";

import prisma from "@/prisma"; // Adjust the import path based on your project structure
import { writeFile } from "fs/promises";
import { join } from "path";
import { v4 as uuidv4 } from "uuid"; // For generating unique filenames

interface AddMovieInput {
  title: string;
  year: number;
  image: File; // File object
}

export const addMovie = async (data: AddMovieInput) => {
  try {
    const { title, year, image } = data;

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
        year,
        image: `/uploads/${fileName}`, // Store relative path
      },
    });

    return newMovie;
  } catch (error) {
    console.error("Failed to add movie:", error);
    throw new Error("Failed to add movie.");
  }
};
