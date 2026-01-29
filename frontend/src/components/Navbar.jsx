import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5 bg-cyan-700">
      
        <h1 className="text-3xl font-bold text-cyan-50">Zaph Tours</h1>
     
        <div className="flex justify-between sm:gap-12 text-xl font-medium text-cyan-50">
          <Link to="/" className="hover:text-orange-400" >Home</Link>
          <Link to="/destination" className="hover:text-orange-400" >Destinations</Link>
          <Link to="/trip-type" className="hover:text-orange-400" >Trip Types</Link>
          <Link to="/blog" className="hover:text-orange-400" >Blog</Link>
          <Link to="/contact" className="hover:text-orange-400" >Contact</Link>
        </div>
        <Link to="/contact" className="bg-orange-700 text-orange-100 p-2 rounded-xl text-xl font-medium hover:text-white">Book Now</Link>
     
    </nav>
  );
};

export default Navbar;
