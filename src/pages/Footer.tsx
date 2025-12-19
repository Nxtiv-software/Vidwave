import React from 'react';
import { FaBehance, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-16 sm:px-12 min-h-screen md:min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-16 lg:gap-x-24">

        {/* 1. Logo & Subscription */}
        <div className="flex flex-col text-center md:text-left">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              VidWave Studios.
            </h2>
            <p className="text-sm opacity-80 mb-6">
              Subscribe our newsletter:
            </p>

            {/* Subscription */}
            <div className="flex bg-[#222] rounded-md overflow-hidden w-full max-w-sm mx-auto md:mx-0">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="flex-grow bg-transparent p-4 text-sm focus:outline-none"
              />
              <button className="bg-[#ff9900] hover:bg-[#ffc04d] text-black w-14 text-xl transition duration-200">
                →
              </button>
            </div>
          </div>

          {/* Social + Copyright */}
          <div className="mt-10">
            <div className="flex justify-center md:justify-start space-x-5 mb-4">
              <a href="#" className="hover:text-[#ff9900] transition">
                <FaBehance size={20} />
              </a>
              <a href="#" className="hover:text-[#ff9900] transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-[#ff9900] transition">
                <FaGithub size={20} />
              </a>
            </div>

            <p className="text-xs opacity-60">
              © 2023 – MIL. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* 2. Navigation */}
        <div className="flex flex-col items-center md:items-start space-y-10">
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <a className="text-lg font-bold text-[#ff9900]">Home</a>
            <a className="text-lg hover:text-[#ff9900]">Portfolio</a>
            <a className="text-lg hover:text-[#ff9900]">Services</a>
            <a className="text-lg hover:text-[#ff9900]">Contact</a>
            <a className="text-lg hover:text-[#ff9900]">Blog</a>
          </div>

          <div className="flex flex-col space-y-2 pt-6 border-t border-gray-800 w-full text-center md:text-left">
            <a className="text-sm opacity-80 hover:text-[#ff9900]">Privacy Policy</a>
            <a className="text-sm opacity-80 hover:text-[#ff9900]">Terms & Conditions</a>
            <a className="text-sm opacity-80 hover:text-[#ff9900]">Cookie Policy</a>
            <a className="text-sm opacity-80 hover:text-[#ff9900]">Careers</a>
          </div>
        </div>

        {/* 3. Contact */}
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg mb-4">Canada</h4>
          <p className="text-sm opacity-80 mb-1">
            71 South Los Carneros Road,
          </p>
          <p className="text-sm opacity-80 mb-6">
            California
          </p>
          <p className="text-base font-medium">
            +51 174 705 812
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;