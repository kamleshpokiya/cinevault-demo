"use client";
import React, { useState } from "react";
import Dropzone from "./Dropzone";
import SubmitButton from "./Button";
import { addMovie, updateMovie } from "@/actions/movies";
import { useRouter } from "next/navigation";
import CancleBtn from "./CancleBtn";
import { Movie } from "@/actions/types";
import { toast } from "react-toastify";
interface MovieData {
  title: string;
  year: number;
  image: File | string | null;
}

const AddMovieData = ({ data }: { data?: Movie }) => {
  const router = useRouter();
  const [submit, setsubmit] = useState(false);
  const [movieData, setMovieData] = useState<MovieData>(
    data
      ? {
          title: data.title,
          year: data.year,
          image: data.image,
        }
      : {
          title: "",
          year: 0,
          image: null,
        }
  );

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
    setsubmit(true);

    const formData = new FormData();
    formData.append("title", movieData.title);
    formData.append("year", movieData.year.toString());

    if (movieData.image) {
      formData.append("image", movieData.image as File);
    }
    if (data) {
      formData.append("id", data.id);
    }
    // Sending FormData to the server
    try {
      let response = null;
      if (data) {
        response = await updateMovie(formData);
      } else {
        response = await addMovie(formData);
      }
      if (response === null) {
        toast.error(
          `${data ? "Failed to update movie" : "Failed to create movie"}`
        );
        return;
      } else {
        router.push("/home");
      }
    } catch (error) {
      console.error("Failed to submit movie:", error);
      toast.error(
        `${data ? "Failed to update movie" : "Failed to create movie"}`
      );
    } finally {
      setsubmit(false);
    }
  };

  return (
    <div className="max-w-[1440px] px-[24px] py-[60px] xl:px-[120px] xl:py-[120px] mx-auto">
      <h1 className="text-white font-semibold text-[32px] lg:text-[48px]">
        {data ? "Edit movie" : "Create a new movie"}
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
            <Dropzone onDrop={handleDrop} initImage={movieData.image} />
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
            <CancleBtn
              label="Cancel"
              variant="secondary"
              type="button"
              classbtn="!px-[60px] md:!px-[53px] lg:!px-[55px] !py-[16px] !h-[unset] !w-[unset]"
            />

            <span></span>
            <SubmitButton
              label={submit ? "submitting" : "submit"}
              variant="primary"
              classbtn="!px-[60px] md:!px-[53px] lg:!px-[55px] !py-[16px] !h-[unset] !w-[unset]"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMovieData;
