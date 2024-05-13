import React from 'react';

const Deals = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-blue-800">Great deals, selling fast!</h2>
      </div>
      <div className="sm:flex justify-between items-center pt-10 sm:w-4/5 mx-auto">
        <div className="deal cursor-pointer relative flex flex-col items-center text-center p-14 m-3 rounded-tl-6xl rounded-tl-8xl bg-blue-200 overflow-hidden">
          <img src="/lights.png" alt="LED lights" className="w-48 h-32" />
          <div className="mt-4">
            <h3>LED lights</h3>
            <p>Get 20% off</p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
        </div>
        <div className="deal cursor-pointer relative flex flex-col items-center text-center p-14 m-3 rounded-tl-6xl rounded-tl-8xl bg-blue-200 overflow-hidden">
          <img src="/cement.png" alt="Cement" className="w-48 h-32" />
          <div className="mt-4">
            <h3>Cement</h3>
            <p>Get up to 40% off on bulk orders</p>
          </div>
          <div className="absolute cursor-pointer top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
        </div>
        <div className="deal relative flex flex-col items-center text-center p-14 m-3 rounded-tl-6xl rounded-tl-8xl bg-blue-200 overflow-hidden">
          <img src="/bathroom-sanitry.png" alt="Sanitaryware & fittings" className="w-48 h-32" />
          <div className="mt-4">
            <h3>Sanitaryware & fittings</h3>
            <p>Check them now</p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
