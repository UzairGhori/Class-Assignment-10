import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div className="bg-orange-500 w-auto flex flex-wrap items-center justify-between p-4">
      {/* Logo */}
      <div className="flex items-center sm:w-full sm:justify-center lg:w-auto">
        <Image
          src="/Ghorimarket.PNG"
          alt="Logo"
          width={100}
          height={100}
          className="object-contain sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 "
        />
      </div>

      {/* Title */}
      <div className="flex-grow text-white text-center text-lg sm:text-xl md:text-2xl lg:text-5xl font-bold font-serif mt-2 sm:mt-0">
        <h1>Ghori Market</h1>
      </div>

      {/* Search Bar */}
      <div className="w-full sm:w-3/4 md:w-auto lg:w-1/4 flex justify-center mt-4 sm:mt-2 lg:mt-0">
        <input
          type="text"
          placeholder="Search Product"
          className="border-2 border-white w-full sm:w-64 md:w-60 lg:w-80 p-2 rounded-md text-gray-800"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-4 sm:gap-2 sm:w-full sm:justify-center sm:flex-wrap md:w-auto mt-4  sm:mt-2 lg:mt-0 items-center">
        <Link
          href="/products"
          className="text-white px-1 py-2 sm:px-2 sm:py-1 rounded-md hover:bg-black text-center"
        >
          Products
        </Link>
        <Link
          href="/cart"
          className="text-white px-1 py-2 sm:px-2 sm:py-1 rounded-md hover:bg-black text-center"
        >
          Cart
        </Link>
        <Link
          href="/login"
          className="text-white px-1 py-2 sm:px-2 sm:py-1 rounded-md hover:bg-black text-center"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="text-white px-1 py-2 sm:px-2 sm:py-1 rounded-md hover:bg-black text-center"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
