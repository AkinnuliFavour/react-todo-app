import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="p-4 bg-white rounded-t-md w-full lg:w-6/12 xl:w-5/12 2xl:w-4/12">
      <h3 className="text-gray-600 text-lg font-bold text-center">
        Tasks (Today)
      </h3>
      <Nav />
    </header>
  );
};

export default Header;
