import React from "react";

export default function NavLinks() {
  return (
    <div className="w-106 h-8  flex items-center  gap-6">
      <nav className="flex items-center space-x-8">
        <a href="#" className="text-white font-bold text-[18px]">
          Bookshop
        </a>
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
