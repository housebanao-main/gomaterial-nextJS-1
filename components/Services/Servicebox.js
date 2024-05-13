import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faPiggyBank, faHeadset, faShieldAlt, faTruck, faTag, faCog, faClock } from '@fortawesome/free-solid-svg-icons';

const TabButton = ({ isActive, onClick, children }) => (
  <button
    className={`px-8 py-4 cursor-pointer mr-4 rounded focus:outline-none ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const ServiceIcon = ({ icon }) => (
  <div className="h-20 w-20 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
    <FontAwesomeIcon icon={icon} className="text-blue-600 text-4xl" />
  </div>
);

const ServiceBox = ({ title, description }) => (
  <div className="bg-gray-100 rounded-lg p-4">
    <ServiceIcon icon={title.icon} />
    <h3 className="text-lg font-semibold mb-2">{title.text}</h3>
    <div className="text-sm">{description}</div>
  </div>
);

const ServiceContainer = () => {
  const [activeTab, setActiveTab] = useState('Buyers');

  const serviceBoxes = [
    { title: { text: 'Online Payment', icon: faCreditCard }, description: '100% secure', tab: 'Buyers' },
    { title: { text: 'Big Savings', icon: faPiggyBank }, description: 'Save more with us', tab: 'Buyers' },
    { title: { text: 'Best online support', icon: faHeadset }, description: 'Hours: 12*7', tab: 'Buyers' },
    { title: { text: '100% Guarantee', icon: faShieldAlt }, description: 'Original products', tab: 'Buyers' },
    { title: { text: 'Large Supplies', icon: faTruck }, description: 'Bulk quantities, high quality.', tab: 'Suppliers' },
    { title: { text: 'Best Rates', icon: faTag }, description: 'Competitive without compromise.', tab: 'Suppliers' },
    { title: { text: 'Easy Management', icon: faCog }, description: 'Simplified procurement tools.', tab: 'Suppliers' },
    { title: { text: 'Fast Payments', icon: faClock }, description: 'Quick and secure.', tab: 'Suppliers' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-14 px-4 py-8">
      <div className="flex justify-center mb-8">
        <TabButton isActive={activeTab === 'Buyers'} onClick={() => setActiveTab('Buyers')}>Buyers</TabButton>
        <TabButton isActive={activeTab === 'Suppliers'} onClick={() => setActiveTab('Suppliers')}>Suppliers</TabButton>
      </div>
      <div className="flex -mx-4 overflow-auto lg:flex-nowrap lg:overflow-visible">
        {serviceBoxes.filter(service => service.tab === activeTab).map((service, index) => (
          <div key={index} className="min-w-max px-4 mb-4 lg:w-1/4 lg:mb-0">
            <ServiceBox title={service.title} description={service.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceContainer;
