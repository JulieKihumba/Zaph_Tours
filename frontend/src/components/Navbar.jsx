import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/destination">Destinations</Link>
        <Link to="/trip-type">Trip Types</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact">Book Now</Link>
    </div>
  )
}

export default Navbar