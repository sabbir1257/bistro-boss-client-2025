import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="md:grid grid-cols-2 justify-between mx-auto text-center ">
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
          <div className="flex gap-6 justify-center text-3xl">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <span class="block py-2 text-white sm:text-center bg-black ">
        Copyright © CulinaryCloud. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
