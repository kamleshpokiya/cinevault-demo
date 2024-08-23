import prisma from "@/prisma";

export const connectToDatabase = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.log("Failed to connect to database", error);
    throw new Error("Failed to connect to database");
  }
};
