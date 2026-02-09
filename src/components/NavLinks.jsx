import React from "react";
import { FaBookBookmark } from "react-icons/fa6";

export default function NavLinks() {
  return (
    <div className="w-106 h-8  flex items-center  gap-6">
      <nav className="flex items-center space-x-8">

        <div className="flex items-center justify-center gap-3">
          <span>
           <FaBookBookmark className="text-white" size={20} />
          </span>
          <a href="#" className="text-white font-bold text-[18px]">
            Bookshop
          </a>
          
        </div>
        <a href="#" className="text-white hover:text-gray-200">
          Home
        </a>
        <a href="#" className="text-white hover:text-gray-200">
          Books
        </a>
        <a href="#" className="text-white hover:text-gray-200">
          About us
        </a>
      </nav>
    </div>
  );
}
