import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const links = {
  Steel: '#',
  Tiles: '#',
  TMT: '#',
  Cements: '#',
  Reviews: '#',
  Careers: '#',
  Pricing: '#',
  'Press inquiries': '#',
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-10 py-8 md:py-12 lg:py-16 flex flex-wrap justify-around animate-fade-in-up">
      <div className="w-full md:w-1/3 lg:w-auto cursor-pointer mx-auto md:mx-0 md:mr-6 lg:ml-24 lg:mr-24">
        <h3 className="text-white text-lg mb-4">About us</h3>
        <p className="text-white">Gomaterial is an online procurement e-commerce website specializing in construction and interior materials. As India’s first online procurement platform catering to both B2B and B2C needs, we offer a comprehensive range of products, including tiles, TMT bars, sanitary ware, steel, cement, and more, providing a one-stop solution for all your construction and interior material requirements.</p>
      </div>
      <div className="w-full md:w-1/3 lg:w-auto cursor-pointer mx-auto md:mx-0 md:px-6">
        <h3 className="text-white text-lg mb-4">Our Services</h3>
        <ul className="text-white list-none p-0">
          {Object.entries(links).map(([text, url]) => (
            <li key={text}>
              <a href={url} className="hover:text-blue-500 no-underline text-white">{text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-1/3 lg:w-auto cursor-pointer mx-auto md:mx-0 md:px-6">
        <h3 className="text-white text-lg mb-4">Contact</h3>
        <p className="text-white">746B, 7th floor, JMD Megapolis Sector 48, Gurgaon, Haryana 122018</p>
        <p className="text-white">Email: contact@gomaterial.in</p>
      </div>
      <div className="w-full md:w-1/3 lg:w-auto cursor-pointer mx-auto md:mx-0 md:px-6">
        <h3 className="text-white text-lg mb-4">Follow Us</h3>
        <div className="flex">
          <a href="#" className="text-white hover:text-blue-500 mr-4"><FaFacebookF /></a>
          <a href="#" className="text-white hover:text-blue-500 mr-4"><FaTwitter /></a>
          <a href="#" className="text-white hover:text-blue-500 mr-4"><FaInstagram /></a>
          <a href="#" className="text-white hover:text-blue-500"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
