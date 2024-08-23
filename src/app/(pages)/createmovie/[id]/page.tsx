import SubmitButton from "@/Components/Button";
import Dropzone from "@/Components/Dropzone";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="max-w-[1440px] px-[16px] py-[60px] xl:px-[120px] xl:py-[120px] mx-auto">
          <h1 className="text-white font-semibold text-[32px] lg:text-[48px]">
            {params.id == "Edit" ? "Edit movie" : "Create a new movie"}
          </h1>
      <div className="md:grid grid-cols-12 gap-6">
        <div className="col-span-6">

          <div className="mt-20 lg:mt-[120px] space-y-6">
            <div className="md:hidden flex flex-col gap-6">
              <input
                type="text"
                placeholder="Title"
                className="py-[10px] px-4 rounded-lg lg:w-[362px] h-[45px] bg-inputColor text-white focus:outline-none"
              />
              <input
                type="number"
                min="1900"
                max="2050"
                step="1"
                value="2024"
                placeholder="Year"
                className="py-[10px] px-4 rounded-lg lg:w-[216px] h-[45px] bg-inputColor text-white focus:outline-none"
              />
            </div>
            <Dropzone />
          </div>
        </div>

        <div className="col-span-6 flex flex-col sm:mt-[80px] lg:mt-[120px] ">
          <div className="hidden md:flex flex-col gap-6">
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
          <div className="mt-10 sm:mt-[64px] space-x-4">
            <SubmitButton
              label="Cancel"
              variant="secondary"
              classbtn="!px-[64px] sm:!px-[55px] !py-[16px] !h-[unset] !w-[unset]"
            />
            <SubmitButton
              label="Submit"
              variant="primary"
              classbtn="!px-[64px] sm:!px-[55px] !py-[16px] !h-[unset] !w-[unset]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
