"use client";
import React from "react";
import { useDropzone } from "react-dropzone";
import Dropzone from "./Dropzone";

const CreateMovie: React.FC = () => {
  return (
    <>
      <div className="flex flex-row items-center space-x-4">
        <Dropzone />
        <input
          type="text"
          placeholder="Title"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </>
  );
};

export default CreateMovie;
