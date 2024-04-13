import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <nav>
      <ul className='nav-elements'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tarot">Tarot</Link></li>
        <li><Link to="/astrology">Astrology</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign in</Link></li>
      </ul>
      </nav>
    </div>
  )
}
