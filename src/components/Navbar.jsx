import React from 'react'
import logo from "../assets/Meubel House_Logos-05.png"
import { FaRegUser, FaSearch, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
   <nav className='bg-white w-full h-[100px] flex items-center px-[60px] justify-between shadow'>
    <div>
        <img src={logo} alt="" className="logo" />
    </div>

    <div className='flex justify-between w-[400px]'>
      <a href="">Home</a>
      <a href="">Shop</a>
      <a href="">About</a>
      <a href="">Contact</a>  
    </div>

    <div className='flex w-[250px] justify-between'>
    <FaRegUser className='p-2 hover:rounded-full hover:bg-red-200 text-4xl cursor-pointer' />
    <FaSearch  className='p-2 hover:rounded-full hover:bg-red-200 text-4xl cursor-pointer'  />
    <FaRegHeart  className='p-2 hover:rounded-full hover:bg-red-200 text-4xl cursor-pointer'  />
    <MdOutlineShoppingCart  className='p-2 hover:rounded-full hover:bg-red-200 text-4xl cursor-pointer'  />
    </div>
   </nav>
  )
}

export default Navbar
