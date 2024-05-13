import { useCallback } from "react";
import { useRouter } from "next/router";
import { FaShoppingCart, FaUser, FaUserPlus } from 'react-icons/fa';

const Header = () => {
  const router = useRouter();

  const onProfileClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  return (
    <header className="flex sm:justify-between items-center py-4 px-6 bg-white text-black fixed w-full top-0 z-50">
      <div className="flex items-center">
        <img src="/Gomaterial-logo.png" alt="Logo" className="h-12 mr-4 sm:ml-8 lg:ml-24" />
      </div>

      <div className="hidden sm:flex justify-center flex-grow">
        <input type="text" placeholder="Search..." className="w-2/4 px-4 py-3 border border-gray-600 placeholder:text-slate-400 pl-4 rounded-full transition-all duration-1000 focus:border-blue-300" />
      </div>

      <div className="flex items-center space-x-4 sm:ml-8 sm:mr-8 lg:mr-36">
        <button className="flex items-center bg-transparent text-black hover:text-blue-500 cursor-pointer">
          <FaShoppingCart className="mr-2" />
          Cart
        </button>
        <button className="flex items-center bg-transparent text-black hover:text-blue-500 cursor-pointer" onClick={onProfileClick}>
          <FaUser className="mr-2" />
          Sign In
        </button>
        <button className="hidden sm:flex items-center bg-blue-500 text-white rounded-full px-4 py-3 hover:bg-blue-600 cursor-pointer">
          <FaUserPlus className="mr-2" />
          Become a Seller
        </button>
      </div>
    </header>
  );
};

export default Header;
