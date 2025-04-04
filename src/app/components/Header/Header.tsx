"use client";
import React from "react";
import { Bell } from "lucide-react";
import Image from "next/image";
import Navbar from "./navbar";
import SearchBar from "../ReusableComponents/searchBar";
import NavButtons from "./navButtons";
import Link from "next/link";


const Header: React.FC = () => {

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-black text-white">
      {/* Left Side - Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <Image src="/icons/logo.svg" alt="Abyss Logo" width={30} height={30} />
          <span className="text-xl font-semibold">abyss</span>
        </div>
      </Link>

      <SearchBar/>
      <Navbar/>

      {/* Right Side - Notifications, Create Button, User Profile */}
      <div className="flex items-center space-x-4">

        <NavButtons/>
        <Bell className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />

        <Image
          src="/icons/avatar.svg"
          alt="User Avatar"
          width={56}
          height={52.3}
          className="rounded-full ml-32"
        />
      </div>
    </header>
  );
};

export default Header;
