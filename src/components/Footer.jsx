import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="rounded-b-md bg-white h-11 flex items-center justify-center w-full lg:w-6/12 xl:w-5/12 2xl:w-4/12 p-6">
      <Link to="/add-task">
        <FaPlusCircle className="w-9 h-9 rounded-full text-cyan-200 hover:text-cyan-400" />
      </Link>
    </footer>
  );
};

export default Footer;
