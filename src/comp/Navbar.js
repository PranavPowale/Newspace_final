import React, { Component } from "react";
import { GlobeIcon } from '@heroicons/react/solid'
import { Link } from "react-router-dom";

const Navbar = (props) => {
   
    return ( 
      <div className='z-50 fixed w-full '>
        <div className=" h-16 border-b shadow-md bg-black text-white ">
        {/* Left Part */}
        <div className='flex ml-2 pt-1 '>
        <GlobeIcon className='hidden md:h-12  cursor-pointer' />
        <Link to='/' className='items-center text-2xl pt-2 pl-2 cursor-pointer'>NewsSpace</Link> 
        <div className="hidden md:flex flex-grow  p-4   ">
        <ul className="hidden md:flex flex-grow space-x-4   text-gray-400 ">
          <li className='cursor-pointer'><Link className='hover:text-white cursor-pointer' to="/business">Business</Link></li>
          <li className='cursor-pointer'><Link className='hover:text-white cursor-pointer' to="/entertainment">Entertainment</Link></li>
          <li className='cursor-pointer'><Link className='hover:text-white cursor-pointer' to="/general" >General</Link></li>
          <li className='cursor-pointer'><Link className='hover:text-white cursor-pointer' to="/health">Health</Link></li>
          <li className='cursor-pointer'><Link className='hover:text-white cursor-pointer' to="/sports">Sports</Link></li>
          <li className='cursor-pointer'><Link className='hover:text-white cursor-pointer' to="/technology">Technology</Link></li>
        </ul>
        </div> 
        
        <div className='flex'>    
        <Link to='/about' className='items-center text-lg m-2 p-2 cursor-pointer'>About</Link>
        <div className="group relative h-full">
                <a href className="text-white flex items-center h-full bg-grey-darkest px-4">
                Categories
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-6 w-6 text-grey-darker fill-current ml-1"><path className="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/></svg>
                </a>
                <div className="hidden  z-10 group-hover:block absolute pin-r top-full w-32 bg-black">
                    <Link to="/business" className="hover:bg-gray-600 block text-left py-3 px-3 text-white hover:text-blue-dark text-xs cursor-pointer">Business</Link>
                    <Link to="/entertainment" className="hover:bg-gray-600 block text-left py-3 px-3 text-white hover:text-blue-dark text-xs cursor-pointer">Entertainment</Link>
                    <Link to="/general" className="hover:bg-gray-600 block text-left py-3 px-3 text-white hover:text-blue-dark text-xs cursor-pointer">General</Link>
                    <Link to="/health" className="hover:bg-gray-600 block text-left py-3 px-3 text-white hover:text-blue-dark text-xs cursor-pointer">Health</Link>
                    <Link to="/sports" className="hover:bg-gray-600 block text-left py-3 px-3 text-white hover:text-blue-dark text-xs cursor-pointer">Sports</Link>
                    <Link to="/technology" className="hover:bg-gray-600 block text-left py-3 px-3 text-white hover:text-blue-dark text-xs cursor-pointer">Technology</Link>
                </div>
            </div>  
        </div>
        </div>
        
          
        </div>
      </div>
    );
  }


export default Navbar;
