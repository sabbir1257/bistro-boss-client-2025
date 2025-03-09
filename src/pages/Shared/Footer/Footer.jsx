import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="justify-between grid-cols-2 mx-auto text-center md:grid ">
        <div className="bg-[#1F2937] text-white py-16">
          <h2 className="mb-5 text-[32px] font-medium ">CONTACT US</h2>
          <p className="font-medium text-[20px]">
            123 ABS Street, Uni 21, Bangladesh
          </p>
          <p className="font-medium text-[20px]">+88 123456789</p>
          <p className="font-medium text-[20px]">Mon - Fri: 08:00 - 22:00</p>
          <p className="font-medium text-[20px]">Mon - Sun: 10:00 - 23:00</p>
        </div>
        <div className="bg-[#111827] py-16 text-white">
          <h2 className="text-[32px] mb-5 font-medium">Follow US</h2>
          <p className="font-medium text-[20px] mb-5">
            Join us on social media
          </p>
          <div className="flex justify-center gap-6 text-3xl">
            <Link to="/">
              <FaFacebookF />
            </Link>
            <Link to="/">
              <FaInstagram />
            </Link>
            <Link to="/">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
      <span className="block py-2 text-white bg-black sm:text-center ">
        Copyright © CulinaryCloud. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
