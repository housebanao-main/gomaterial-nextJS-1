import React from 'react';

const categories = [
  {
    image: '/Structure.jpg',
    alt: 'Structure Material',
    label: 'Structure Material'
  },
  {
    image: '/tiles.jpg',
    alt: 'Flooring and Tiles',
    label: 'Flooring and Tiles'
  },
  {
    image: '/bathroom.jpeg',
    alt: 'Bathroom and Sanitary',
    label: 'Bathroom and Sanitary'
  },
  {
    image: '/electricity.jpeg',
    alt: 'Electrical and Lightings',
    label: 'Electrical and Lightings'
  },
  {
    image: '/hardware.jpeg',
    alt: 'Hardware and Fittings',
    label: 'Hardware and Fittings'
  },
  {
    image: '/plywood.jpeg',
    alt: 'Plywood and Boards',
    label: 'Plywood and Boards'
  },
  {
    image: '/basin.png',
    alt: 'Modular Kitchen',
    label: 'Modular Kitchen'
  },
  {
    image: '/basin.png',
    alt: 'Modular Kitchen',
    label: 'Modular Kitchen'
  }
];

const CategoryCollage = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-blue-800">Shop by categories</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 px-6 py-12">
        {categories.map((category, index) => (
          <div key={index} className="category cursor-pointer relative overflow-hidden rounded-md hover:shadow-lg">
            <img src={category.image} alt={category.alt} className="w-full h-auto transform transition-transform hover:scale-105" />
            <div className="category-label absolute bottom-0 p-2 left-0 w-full bg-black bg-opacity-70 text-white font-semibold py-2">
              <span className="text-sm">{category.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCollage;
