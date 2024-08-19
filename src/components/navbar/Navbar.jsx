import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import logo from './logo.png';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const cartItems = useSelector((state) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-auto max-h-24 w-auto object-contain" />
        </Link>
        <div className="hidden md:flex space-x-4">
          <li className=' list-none '><Link to="/" className="text-gray-800 dark:text-white hover:text-black">Home</Link></li>
          <li className=' list-none '><Link to="/allproduct" className="text-gray-800 dark:text-white hover:text-black">Products</Link></li>
          <li className=' list-none '><Link to="/about" className="text-gray-800 dark:text-white hover:text-black">About</Link></li>
          <li className=' list-none '><Link to="/contact" className="text-gray-800 dark:text-white hover:text-black">Contact</Link></li>
        </div>
        <div className="flex items-center space-x-4">
          {!user ? (
            <Link to="/login" className="text-gray-900 dark:text-white hover:underline flex items-center">
              <FaSignInAlt className="mr-1" />
              Login
            </Link>
          ) : (
            <>
              <Link to="/user-dashboard" className="text-gray-900 dark:text-white hover:underline flex items-center">
                <FaUser className="mr-1" />
                {user?.name}
              </Link>
              <button
                onClick={() => {
                  localStorage.clear('users');
                  window.location.href = '/login';
                }}
                className="text-gray-900 dark:text-white hover:underline flex items-center"
              >
                <FaSignOutAlt className="mr-1" />
                Logout
              </button>
            </>
          )}
          <Link to="/cart" className="relative text-gray-900 dark:text-white hover:text-black">
            <FaShoppingCart className="text-gray-800 dark:text-white" size={24} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-gray-800 dark:text-white hover:text-black" onClick={handleMenuToggle}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="flex flex-col items-center space-y-4 py-2">
            <Link to="/" className="text-gray-800 dark:text-white hover:text-black">Home</Link>
            <Link to="/allproduct" className="text-gray-800 dark:text-white hover:text-black">Products</Link>
            <Link to="/about" className="text-gray-800 dark:text-white hover:text-black">About</Link>
            <Link to="/contact" className="text-gray-800 dark:text-white hover:text-black">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
