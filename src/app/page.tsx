"use client";

import Footer from "@/Components/WaveFooter";
import React from "react";
import SmallFooter from "@/Components/SmallFooter";

const page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#093545] text-[#2bd17e]">
      {/* Page Content */}
      <div className="flex-grow">{/* Your main page content here */}</div>

      {/* Footer with Wave Border */}

      <div className="hidden sm:block">
        <Footer />
      </div>
      <div className="sm:hidden">
        <SmallFooter />
      </div>
    </div>
  );
};

export default page;
