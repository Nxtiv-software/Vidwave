import React from 'react';
// Install react-icons: npm install react-icons
import { FaBehance, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white h-[70vh] flex items-center px-6 sm:px-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-16 lg:gap-x-24">

        {/* 1. Left Section: Logo & Subscription */}
        <div className="col-span-1 flex flex-col justify-between min-h-[300px] md:min-h-0">
          <div>
            <h2 className="text-4xl font-bold mb-2">VidWave Studios.</h2>
            <p className="text-sm opacity-80 mb-6">Subscribe our newsletter:</p>
            
            {/* Subscription Form */}
            <div className="flex bg-[#222] rounded-md overflow-hidden w-full max-w-sm">
              <input 
                type="email" 
                placeholder="ENTER OUR EMAIL" 
                className="flex-grow bg-transparent p-4 text-sm focus:outline-none"
              />
              {/* Orange button accent */}
              <button className="bg-[#ff9900] hover:bg-[#ffc04d] text-black w-14 text-2xl font-normal transition duration-200">
                &rarr;
              </button>
            </div>
          </div>

          {/* Social Icons & Copyright at bottom */}
          <div className="mt-auto">
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Behance" className="hover:text-[#ff9900] transition duration-200"><FaBehance size={20} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-[#ff9900] transition duration-200"><FaTwitter size={20} /></a>
              <a href="#" aria-label="GitHub" className="hover:text-[#ff9900] transition duration-200"><FaGithub size={20} /></a>
            </div>
            
            {/* Copyright */}
            <p className="text-xs opacity-60">
              © Copyright 2023 - MIL. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* 2. Middle Section: Navigation & Policies */}
        <div className="col-span-1 flex flex-col justify-center space-y-8">
          {/* Main Navigation */}
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-lg font-bold text-[#ff9900] hover:text-white transition duration-200">Home</a>
            <a href="#" className="text-lg font-medium hover:text-[#ff9900] transition duration-200">Portfolio</a>
            <a href="#" className="text-lg font-medium hover:text-[#ff9900] transition duration-200">Services</a>
            <a href="#" className="text-lg font-medium hover:text-[#ff9900] transition duration-200">Contact</a>
            <a href="#" className="text-lg font-medium hover:text-[#ff9900] transition duration-200">Blog</a>
          </div>
          
          {/* Policy Links */}
          <div className="flex flex-col space-y-2 pt-4 border-t border-gray-800">
            <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-[#ff9900] transition duration-200">Privacy Policy</a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-[#ff9900] transition duration-200">Terms and conditions</a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-[#ff9900] transition duration-200">Cookie Policy</a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-[#ff9900] transition duration-200">Careers</a>
          </div>
        </div>

        {/* 3. Right Section: Contact Info */}
        <div className="col-span-1 flex flex-col justify-center">
          <h4 className="font-bold mb-4 text-lg">Canada</h4>
          <p className="text-sm opacity-80 leading-relaxed mb-2">71 South Los Carneros Road,</p>
          <p className="text-sm opacity-80 leading-relaxed mb-6">California</p>
          <p className="text-base font-medium">+51 174 705 812</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;