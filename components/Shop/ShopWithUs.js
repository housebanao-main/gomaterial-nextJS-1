import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import productsData from '../../public/products.json';

const ShopWithUs = () => {
  const { products } = productsData;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center text-blue-800">Shop with us</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.name} className="bg-white rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover object-center" />
            <div className="pb-7">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.details}</p>
              <div className="flex items-center justify-between mt-2">
                <button className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-300">
                  View Details
                </button>
                <FaArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopWithUs;
