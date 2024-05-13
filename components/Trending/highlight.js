import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Update the import path
import 'slick-carousel/slick/slick-theme.css'; // Update the import path
import highlightProducts from '../../public/highlightProducts.json'; // Import the JSON file

const Highlight = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold text-gray-800">Trending Products</h2>
      </div>
      <Slider className="w-10/12 mx-auto" {...settings}>
        {highlightProducts.products.map(product => (
          <div key={product.id} className="text-center slick-slide" style={{marginRight: '10px'}}>
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xs" />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Highlight;
