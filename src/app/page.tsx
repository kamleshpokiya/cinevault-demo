"use client";

import Footer from "@/Components/WaveFooter";
import React from "react";

const page: React.FC = () => {

  return (
    <div className="min-h-screen flex flex-col bg-[#093545] text-[#2bd17e]">
      {/* Page Content */}
      <div className="flex-grow">{/* Your main page content here */}</div>

      {/* Footer with Wave Border */}
      <Footer />
    </div>
  );
};

export default page;
