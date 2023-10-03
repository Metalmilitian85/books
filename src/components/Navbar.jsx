import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="top-0 flex justify-between items-center h-24 max-w-100v mx-auto px-4 text-blue font-bold bg-gradient-to-r from-purple-500">
        <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={20} color='rgb(168 85 247)'/> : <AiOutlineMenu size={20} color='#e9d5ff'/>}
        </div>
          <ul className="hidden md:flex text-purple-100 p-8">
            <Link to='/'><li className="p-4 hover:text-purple-200 hover:scale-105 duration-300">Home</li></Link>
            <Link to='/books'><li className="p-4 hover:text-purple-200 hover:scale-105 duration-300">Books</li></Link>
            <Link to='/Mission'><li className="p-4 hover:text-purple-200 hover:scale-105 duration-300">Our Mission</li></Link>
            <Link to='/contact'><li className="p-4 hover:text-purple-200 hover:scale-105 duration-300">Contact</li></Link>
          </ul>
      <div className="content-between">  
        <h2 className="w-full text-3xl font-bold text-purple-500 p-8">Pet Adoptions</h2>
        <div className={!nav ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-purple-100 ease-in-out duration-200 z-10" : "fixed left-[-100%]"}>
          <ul className="p-4 text-purple-500 bg-gradient-to-b from-purple-200">
            <button onClick={handleNav}>Close</button>
            <Link to='/'><li onClick={handleNav} className="p-4 border-b border-gray-600">Home</li></Link>
            <Link to='/books'><li onClick={handleNav} className="p-4 border-b border-gray-600">Books</li></Link>
            <Link to='/Mission'><li onClick={handleNav} className="p-4 border-b border-gray-600">Our Mission</li></Link>
            <Link to='/contact'><li onClick={handleNav} className="p-4 border-b border-gray-600">Contact</li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar