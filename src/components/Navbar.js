import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subPart,setSubPart] = useState(0);
  const [subServices,setSubServices] = useState(0);
  const [subContact,setSubContact] = useState(0);

  const handleClick=()=>{
     subPart===0?setSubPart(1):setSubPart(0);
  }
  const handleService = ()=>{
    subServices===0?setSubServices(1):setSubServices(0);
  }
  const handleContact = ()=>{
    subContact===0?setSubContact(1):setSubContact(0);
  }

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">Navigation Menu</div>

        {/* Hamburger Menu for Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center w-full lg:w-auto`}
        >
          <ul className="lg:flex text-white space-x-4">
            <li className="hover:bg-blue-700 p-2 ml-2 rounded">
              <Link to={"/"} className='ml-2'><button>Home</button></Link>
            </li>
            <li className="relative group">
              <Link to={"/services"}><button className="hover:bg-blue-700 p-2 rounded flex" onClick={handleService}><p>Services</p><img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt="" className='h-4 w-4 m-2'/></button></Link>
              {/* Dropdown */}
              <ul className={`left-0 ${subServices===0?"hidden":"block"} bg-blue-700 p-4 rounded space-y-2`}>
                <li className="hover:bg-blue-800 p-2 rounded">
                  <Link to={"/services/consulting"}>Consulting</Link>
                </li>
                <li className="hover:bg-blue-800 p-2 rounded">
                  <Link to={"/services/development"}>Development</Link>
                </li>
              </ul>
            </li>
            <li className="hover:bg-blue-700 p-2 rounded">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="relative group">
              <Link to={"/contact"}><button className="hover:bg-blue-700 p-2 rounded flex" onClick={handleContact}> <p>Contact</p><img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt="" className='h-4 w-4 m-2'/></button></Link>
              {/* Dropdown */}
              <ul className={`left-0 ${subContact===0?"hidden":"block"} bg-blue-700 p-4 rounded space-y-2`}>
                <li className="hover:bg-blue-800 p-2 rounded">
                  <Link to={"/contact/employee"}>Employee</Link>
                </li>
                <li className='relative group'>
                {/* <li className="hover:bg-blue-800 p-2 rounded"> */}
                  <Link to={"/contact/customer"} className={'hover:bg-blue-700 p-2 rounded'}>
                  <button onClick={handleClick} className='flex'>
                    <p>Customer</p><img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt="" className='h-4 w-4 m-2'/> </button>
                  </Link>
                {/* </li> */}
                  <ul className={`right-0 ${subPart===0 ? "hidden" : "block"} bg-blue-900 p-2 rounded space-y-2 `}>
                    <li className='hover:bg-blue-800 p-2 rounded'>
                      <Link to={"contact/customer/daily"} className='text-right text-sm'>Daily Customer</Link>
                    </li>
                    <li>
                      <Link to={"contact/customer/monthly"} className='text-right text-sm'>Monthly Customer</Link>
                    </li>
                  </ul>
                </li> 
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
