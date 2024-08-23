"use client";
import React from "react";
import { useDropzone } from "react-dropzone";

const Dropzone: React.FC = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone();

  return (
    <div
      {...getRootProps()}
      className={`flex justify-center items-center max-w-[473px] max-h-[504px] h-[504px] border-2 border-dashed rounded-md cursor-pointer transition-all duration-200 ${
        isDragActive ? "border-blue-500" : "border-gray-300"
      }`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-blue-500">Drop the files here ...</p>
      ) : (
        <p className="text-gray-500">
          Drag & drop some files here, or click to select files
        </p>
      )}
    </div>
  );
};

export default Dropzone;
