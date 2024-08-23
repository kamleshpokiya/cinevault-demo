import React from "react";

const Page = () => {
  return (
    <>
      <div className="flex relative z-30 items-center justify-center min-h-screen">
        <div className="p-6 rounded-lg w-[300px] h-[360px] flex flex-col items-center justify-center">
          <h2 className="text-[64px] font-semibold mb-4 text-white fw-[600]">
            Sign in
          </h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email"
              className="p-2 rounded-lg w-[300px] h-[45px] bg-inputColor text-white focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-[300px] h-[45px] p-2 rounded-lg  bg-inputColor text-white focus:outline-none"
            />
          </div>
          <div className="flex items-center mb-4 text-white">
            <input  type="checkbox" className="mr-2 cursor-pointer"/>
            <label>Remember me</label>
          </div>

          <button className=" bg-primary text-white  w-[300px] h-[54px] pt-[15px] pr-[126px] pb-[15px] pl-[126px] rounded-lg">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
