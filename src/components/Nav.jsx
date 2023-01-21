import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="mt-4">
      <ul className="flex gap-x-12 md:gap-x-20 lg:gap-x-20 xl:gap-x-24 2xl:gap-x-28 justify-center">
        <li>
          <Link
            to="/"
            className="block font-bold text-gray-700 focus:text-cyan-400 focus:underline focus:decoration-cyan-400 hover:text-cyan-400 hover:underline hover:decoration-cyan-400"
          >
            All
          </Link>
        </li>
        <li>
          <Link
            to="/pending-tasks"
            className="block font-bold ml-5 text-gray-700 focus:text-cyan-400 focus:underline focus:decoration-cyan-400 hover:text-cyan-400 hover:underline hover:decoration-cyan-400"
          >
            Pending
          </Link>
        </li>
        <li>
          <Link
            to="/completed-tasks"
            className="block font-bold ml-5 text-gray-700 focus:text-cyan-400 focus:underline focus:decoration-cyan-400 hover:text-cyan-400 hover:underline hover:decoration-cyan-400"
          >
            Completed
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
