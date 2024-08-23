"use client";
import { Download } from "lucide-react";
import React from "react";
import { useDropzone } from "react-dropzone";

const Dropzone: React.FC = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone();

  return (
    <div
      {...getRootProps()}
      className={`flex justify-center items-center flex-col max-w-[473px] text-white max-h-[504px] h-[504px] border-2 border-dashed rounded-md cursor-pointer transition-all duration-200 ${
        isDragActive ? "border-blue-500" : "border-gray-300"
      }`}
    >
      <Download size={16} />
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-blue-500">Drop the files here ...</p>
      ) : (
        <p className="text-white mt-2">Upload an image here</p>
      )}
    </div>
  );
};

export default Dropzone;
