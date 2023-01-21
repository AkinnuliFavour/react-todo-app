import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Container = () => {
  return (
    <main className="h-3/4 w-screen rounded-md flex items-center justify-center flex-col">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Container;
