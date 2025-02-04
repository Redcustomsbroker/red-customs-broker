import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-red-custom">
          Red Customs Broker
        </Link>
        <div className="space-x-4">
          <Link to="/tracking" className="text-gray-700 hover:text-red-custom">
            Tracking
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-red-custom">
            Blog
          </Link>
          <Link to="/glossary" className="text-gray-700 hover:text-red-custom">
            Glossary
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-red-custom">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;