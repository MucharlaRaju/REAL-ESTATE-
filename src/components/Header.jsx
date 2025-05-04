import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react"

const Header = () => {
  return (
    <div
      className="min-h-screen w-full mb-4 bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <motion.div
      initial={{ opacity: 0, y:100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y:0 }}
      viewport={{ once: true }}
      className="container text-center mx-auto py-4 px-6 mc:px-20 lg:px-32 text-white flex flex-col justify-center items-center">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Explore homes that fits your dreams
        </h2>
        <div className="space-x-6 mt-16">
          <a href="#Projects" className="border bordere-white px-8 py-3 rounded">
            Projects
          </a>
          <a
            href="#Contact"
            className="border bordere-white px-8 py-3 rounded bg-blue-600 cursor-pointer"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
