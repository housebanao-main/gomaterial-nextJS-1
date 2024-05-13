import React, { useState } from 'react';

const RequirementForm = ({ activeSectionProp = 'Buy' }) => {
  const [activeSection, setActiveSection] = useState(activeSectionProp);
  const [activeButton, setActiveButton] = useState(activeSectionProp);

  const handleButtonClick = (section) => {
    setActiveSection(section);
    setActiveButton(section);
  };

  return (
    <div className="container w-11/12 sm:w-4/5 mx-auto bg-slate-50 rounded-3xl px-4 py-8">
      <div className="flex flex-wrap sm:pl-8 mb-8">
        <button
          className={`px-8 py-4 cursor-pointer rounded focus:outline-none sm:mr-2 ${activeButton === 'Buy' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleButtonClick('Buy')}
        >
          Buy
        </button>
        <button
          className={`px-8 py-4 cursor-pointer rounded focus:outline-none ${activeButton === 'Sell' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleButtonClick('Sell')}
        >
          Sell
        </button>
      </div>
      <div className="section text-center" style={{ display: activeSection === 'Buy' ? 'block' : 'none' }}>
        <h2 className='sm:text-left sm:pl-8'>Buy</h2>
        <div className="inputs">
          {/* Inputs for Buy section */}
          <input type="text" placeholder="Enter Product" className="p-2 mx-2 my-1 border border-[#d4d4d4]" />
          <input type="text" placeholder="Quantity" className="p-2 mx-2 my-1 border" />
          <input type="text" placeholder="Company" className="p-2 mx-2 my-1 border" />
          <input type="text" placeholder="Pincode" className="p-2 mx-2 my-1 border" />
          <input type="email" placeholder="Email" className="p-2 mx-2 my-1 border" />
          <input type="text" placeholder="Mobile Number" className="p-2 mx-2 my-1 border" />
          <button className="submitButton p-3 mt-2">Submit</button>
        </div>
      </div>
      <div className="section text-center" style={{ display: activeSection === 'Sell' ? 'block' : 'none' }}>
        <h2 className='sm:text-left sm:pl-8'>Sell</h2>
        <div className="inputs">
          {/* Inputs for Sell section */}
          <input type="text" placeholder="Enter Product" className="p-2 mx-2 my-1 border" />
          <input type="text" placeholder="Quantity" className="p-2 mx-2 my-1 border" />
          <input type="text" placeholder="Company" className="p-2 mx-2 my-1 border" />
          <input type="text" placeholder="Pincode" className="p-2 mx-2 my-1 border" />
          <input type="email" placeholder="Email" className="p-2 mx-2 my-1 border" />
          <input type="text" placeholder="Mobile Number" className="p-2 mx-2 my-1 border" />
          <button className="submitButton p-3 mt-2">Submit</button>
        </div>
      </div>
    </div>
  );
};

RequirementForm.getInitialProps = () => ({ activeSectionProp: 'Buy' });

export default RequirementForm;
