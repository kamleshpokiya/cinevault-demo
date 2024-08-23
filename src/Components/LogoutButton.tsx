"use client";
import { logout } from "@/actions/auth";
import { LogOut } from "lucide-react";
import React from "react";

const LogoutButton = () => {
  return (
    <button className="flex items-center gap-2 md:gap-4 text-xl md:text-2xl">
      <div onClick={() => logout()} className="flex items-center gap-4 ">
        <span className="hidden md:block">Logout</span> <LogOut size={24} />
      </div>
    </button>
  );
};

export default LogoutButton;
