import React, { useState } from "react";
import Cover from "../Shared/Cover/Cover";
import CoverImg from "../../assets/contact/banner.jpg";
import SectionTitle from "../../components/SectionTitle";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };
  return (
    <div>
      <Cover
        img={CoverImg}
        title="CONTACT US"
        details="Would you like to try a dish?"
      />
      <SectionTitle subHeading="---Visit Us---" heading="OUR LOCATION" />
      {/* Contact Information Section */}
      <div className="grid gap-4 p-4 mb-6 text-center md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white shadow-md rounded-2xl">
          <IoCall className="bg-[#D1A054] rounded-tl-2xl rounded-tr-2xl w-full text-5xl text-white py-2" />
          <div className="pt-4 pb-6">
            <h3 className="text-2xl uppercase">phone</h3>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-2xl">
          <FaLocationDot className="bg-[#D1A054] rounded-tl-2xl rounded-tr-2xl w-full text-5xl text-white py-2" />
          <div className="pt-4 pb-6">
            <h3 className="text-2xl uppercase">ADDRESS</h3>
            <p>123 Street, City, Country</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-2xl">
          <MdAccessTime className="bg-[#D1A054] rounded-tl-2xl rounded-tr-2xl w-full text-5xl text-white py-2" />
          <div className="pt-4 pb-6">
            <h3 className="text-2xl uppercase">WORKING HOURS</h3>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <SectionTitle
        subHeading="---Send Us a Message---"
        heading="CONTACT FORM"
      />
      <div className="max-w-3xl p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className='flex w-full gap-8'>
            <div className='w-full'>
              <label
                className="block mb-1 text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#B58130] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B58130]"
                required
              />
            </div>

            {/* Email Field */}
            <div className='w-full'>
              <label
                className="block mb-1 text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#B58130] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B58130]"
                required
              />
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label
              className="block mb-1 text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              Phone*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#B58130] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B58130]"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              className="block mb-1 text-sm font-medium text-gray-700"
              htmlFor="message"
            >
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#B58130] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B58130] hover:border-[#B58130] hover:border-2"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#B58130] text-white py-2 px-4 rounded-lg hover:bg-[#A57328] focus:outline-none focus:ring-2 focus:ring-[#B58130]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
