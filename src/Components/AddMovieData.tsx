"use client";
import React, { useState } from "react";
import Dropzone from "./Dropzone";
import SubmitButton from "./Button";
import { addMovie } from "@/actions/movies";

interface MovieData {
  title: string;
  year: number;
  image: File | null;
}

const AddMovieData = ({ data, id }: { data: any; id: string }) => {
  const [movieData, setMovieData] = useState<MovieData>({
    title: data.title || "",
    year: data.year || "",
    image: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMovieData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDrop = (acceptedFiles: File[]) => {
    setMovieData((prevState) => ({
      ...prevState,
      image: acceptedFiles[0],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", movieData);
    const formData = new FormData();
    formData.append("title", movieData.title);
    formData.append("year", movieData.year.toString());

    if (movieData.image) {
      formData.append("image", movieData.image);
    }

    console.log("Submitted FormData:", formData);

    // Sending FormData to the server
    try {
      const response = await addMovie(formData);
      console.log("react response: ", response);

      // Handle success (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.error("Failed to submit movie:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="max-w-[1440px] px-[24px] py-[60px] xl:px-[120px] xl:py-[120px] mx-auto">
      <h1 className="text-white font-semibold text-[32px] lg:text-[48px]">
        {id === "Edit" ? "Edit movie" : "Create a new movie"}
      </h1>
      <form onSubmit={handleSubmit} className="md:grid grid-cols-12 gap-6">
        <div className="col-span-6">
          <div className="mt-20 lg:mt-[120px] space-y-6">
            <div className="md:hidden flex flex-col gap-6">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={movieData.title}
                onChange={handleInputChange}
                className="py-[10px] px-4 rounded-lg lg:w-[362px] h-[45px] bg-inputColor text-white focus:outline-none"
              />
              <input
                type="number"
                name="year"
                min="1900"
                max="2050"
                step="1"
                value={movieData.year}
                onChange={handleInputChange}
                placeholder="Year"
                className="py-[10px] px-4 rounded-lg lg:w-[216px] h-[45px] bg-inputColor text-white focus:outline-none"
              />
            </div>
            <Dropzone onDrop={handleDrop} />
          </div>
        </div>

        <div className="col-span-6 flex flex-col sm:mt-[80px] lg:mt-[120px] ">
          <div className="hidden md:flex flex-col gap-6">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={movieData.title}
              onChange={handleInputChange}
              className="py-[10px] px-4 rounded-lg w-[362px] h-[45px] bg-inputColor text-white focus:outline-none"
            />
            <input
              type="number"
              name="year"
              min="1900"
              max="2050"
              step="1"
              value={movieData.year}
              onChange={handleInputChange}
              placeholder="Year"
              className="py-[10px] px-4 rounded-lg w-[216px] h-[45px] bg-inputColor text-white focus:outline-none appearance-none"
            />
          </div>
          <div className="mt-10 sm:mt-[64px] space-x-4">
            <SubmitButton
              label="Cancel"
              variant="secondary"
              classbtn="!px-[60px] sm:!px-[55px] !py-[16px] !h-[unset] !w-[unset]"
            />
            <SubmitButton
              label="Submit"
              variant="primary"
              classbtn="!px-[60px] sm:!px-[55px] !py-[16px] !h-[unset] !w-[unset]"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMovieData;
