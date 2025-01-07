import React from 'react'
import {Link, NavLink} from 'react-router-dom'


const Header = () => {
  return (
    <>
    <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
              <div className="container m-auto">
              <div className="flex flex-wrap justify-between items-center mx-auto ">
                    <Link to="/" className="flex items-center">
                        <img
                            src="images/think-life1.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                   
                    <div
                        className="hidden justify-end items-center flex-1 w-full lg:flex lg:w-auto"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to={"/"}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple lg:p-0 ${isActive ? "text-purple active" : "text-gray-700"}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                to={"/products"}
                                className={({isActive}) =>` block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple lg:p-0 ${isActive ? "text-purple active" : "text-gray-700"}`}>
                                    Products
                                </NavLink>
                            </li>
                             
                             <li>
                                
                                <NavLink
                                to={"/blog"}
                                className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple lg:p-0 ${isActive ? "text-purple active" : "text-gray-700"}`}>
                                    Blog
                                </NavLink>
                             </li>

                             <li>
                               
                                <NavLink
                                 to={"/about"}
                                className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple lg:p-0 ${isActive ? "text-purple active" : "text-gray-700"}`}>
                                    About Us
                                </NavLink>
                             </li>
                             <li>
                                <NavLink 
                                to={"/how-it-works"}
                                className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple lg:p-0 ${isActive ? "text-purple active" : "text-gray-700"}`}>
                                    How It Workes
                                </NavLink>
                             </li>
                            
                        </ul>
                    </div>
                    <div className="flex items-center ml-5">
                        <Link
                            to="#"
                            className=" border  border-purple text-purple focus:ring-4 focus:ring-transparent  rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Login
                        </Link>
                        <Link
                            to="#"
                            className="bg-purple  border  border-purple text-white ml-2 focus:ring-4 focus:ring-transparent  rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
              </div>
            </nav>
        </header>
    </>
  )
}

export default Header