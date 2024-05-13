import React, { useState, useEffect } from 'react';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowModal(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div>
      {/* Your content */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="relative z-50 w-11/12 max-w-lg mx-auto my-6">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="relative p-8 flex-auto">
                <h3 className="text-lg font-semibold mx-9 mb-4">Get in touch with us</h3>
                <input
                  type="text"
                  className="w-4/5 mx-9 mb-4 p-3 border border-gray-300 rounded"
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                />
                <input
                  type="number"
                  className="w-4/5 mx-9 mb-4 p-3 border border-gray-300 rounded"
                  placeholder="Phone"
                  value={phone}
                  onChange={handlePhoneChange}
                />
                <input
                  type="text"
                  className="w-4/5 mx-9 p-3 border border-gray-300 rounded"
                  placeholder="Location"
                  value={location}
                  onChange={handleLocationChange}
                />
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                <button
                  className="bg-gray-200 cursor-pointer text-gray-700 active:bg-gray-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  className="bg-blue-700 cursor-pointer text-white active:bg-gray-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
