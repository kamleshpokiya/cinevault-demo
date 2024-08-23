import SubmitButton from "@/Components/Button";
import Dropzone from "@/Components/Dropzone";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="max-w-[1440px] p-[120px] mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <h1 className="text-white font-semibold text-[48px]">
            {params.id == "Edit" ? "Edit movie" : "Create a new movie"}
          </h1>
          <div className="mt-[120px]">
            <Dropzone />
          </div>
        </div>

        <div className="col-span-6 flex flex-col mt-[190px] ">
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Title"
              className="py-[10px] px-4 rounded-lg w-[362px] h-[45px] bg-inputColor text-white focus:outline-none"
            />
            <input
              type="number"
              min="1900"
              max="2050"
              step="1"
              placeholder="Year"
              className="py-[10px] px-4 rounded-lg w-[216px] h-[45px] bg-inputColor text-white focus:outline-none appearance-none"
            />
          </div>
          <div className="mt-[64px] space-x-4">
            <SubmitButton
              label="Submit"
              variant="primary"
              classbtn="!px-[55px] !py-[16px] !h-[unset] !w-[unset]"
            />
            <SubmitButton
              label="Cancel"
              variant="secondary"
              classbtn="!px-[55px] !py-[16px] !h-[unset] !w-[unset]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
