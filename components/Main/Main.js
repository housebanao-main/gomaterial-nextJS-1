import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import icons as needed
import MiniSlider from "./MiniSlider";

const Main = () => {
  const placeholderText = "Search for raw material, home fittings and more...";
  const highlights = ["product,", "service,", "solution,"]; // List of highlights
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHighlightIndex((prevIndex) => (prevIndex + 1) % highlights.length);
    }, 3000); // Change highlight every 3 seconds

    return () => clearInterval(intervalId);
  }, [highlights.length]);

  const popularItems = {
    "Popular:": null,
    "Raw material": null,
    "TMT": null,
    "Bathroom fittings": null,
    "PVC pipes": null,
  };

  return (
    <div className="relative flex justify-between items-start h-screen">
      <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay loop muted>
        <source src="/factory.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="z-10 max-w-xl w-11/12 sm:p-16 sm:pl-28 lg:pl-28 sm:mt-34 mt-20 p-6 sm:pl-40">
        <h1 style={{ fontSize: "3.5rem" }} className="text-white font-bold mb-4">Find the right <span className="highlight" style={{ fontFamily: 'Freehand, cursive', transition: 'color 0.5s ease-in-out' }}>{highlights[highlightIndex]}</span> right away</h1>
        <div className="flex items-center mb-8">
          <input type="text" id="searchInput" placeholder={placeholderText} className="w-full px-4 py-3 border border-gray-700 rounded-full mr-4 typewriter" />
          <button className="px-8 py-3 border cursor-pointer border-blue-500 rounded-full bg-blue-500 text-white hover:bg-blue-600">
            <FaSearch />
          </button>
        </div>
        <div className="flex flex-wrap mb-4">
          {Object.entries(popularItems).map(([label, _]) => (
            <span key={label} className="bg-white text-black px-4 py-2 mb-2 rounded-full text-xs mr-2 cursor-pointer">{label}</span>
          ))}
        </div>
        <MiniSlider/>
      </div>
      <div className="absolute w-2/7 right-0 inset-y-0 bg-black bg-opacity-80 z-10 hidden sm:flex justify-center items-center">
        <div className="max-w-md mb-11 w-5/6 p-4 bg-opacity-80 text-white">
          <h2 style={{ fontSize: "34px" }} className="text-3xl font-bold mb-4">Sign up with us as a seller</h2>
          <p className="mb-4 pr-14">Joining is quick and easy! Start selling your products in just a few simple steps.</p>
          <input type="text" placeholder="Name" className="w-2/3 px-4 py-3 mb-4 border border-gray-300 rounded" />
          <input type="number" placeholder="Phone" className="w-2/3 px-4 py-3 mb-4 border border-gray-300 rounded" />
          <input type="text" placeholder="Place" className="w-2/3 px-4 py-3 mb-4 border border-gray-300 rounded" />
          <button className="w-9/12 px-4 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
