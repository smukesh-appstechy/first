import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Footer = () => {
     const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      function subscribe(data){
        console.log(data);
      }
  return (
    <>
     <footer className="bg-[#1A223F] pt-20">
           <div className="container m-auto">

            <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
            <div className="p-4">
                <img src="/images/footerLogo.png" alt="" />
                <div className="newsletter-wrapper pt-20">
                    <p className='text-xl text-white mb-5'>Subscribe to our newsletter</p>
                    <form onClick={handleSubmit(subscribe)} action="" className='flex gap-5 items-start'>
                        <div className="newslater-input-wapper flex flex-col">
                        <input type="email" className='border rounded-md py-4 text-sm px-5 w-96' placeholder='Your Email' {...register("email", {
                            required: {
                            value:true,
                            message:"Eamil field can't be empty"
                        },
                        pattern:{
                            value:/^[A-Za-z]+$/,
                            message:"Email should be add atleast @ and ."
                        }})}/>
                          {errors.email &&(  <p className='text-red-700 text-sm mt-2'>{errors.email.message}</p>
                        )}
                        </div>
                        <input  type="submit" value="Subscribe" className='bg-purple rounded-md py-4 px-5 text-white cursor-pointer'/>
                    </form>
                </div>
                </div> 
        <div className="p-4">
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-md text-white">Navigation</h2>
                            <ul className="">
                                <li className="mb-4">
                                    <NavLink 
                                    to="/" 
                                    className={({isActive})=>`text-base ${isActive ? "text-purple" : "text-white"}`}>
                                        Home
                                    </NavLink>
                                </li>

                                <li className='mb-4'>
                                    <NavLink 
                                    to="/Products"
                                    className={({isActive}) =>`text-base ${isActive ? "text-purple" : "text-white"}`}>
                                        Products
                                    </NavLink>
                                </li>
                                <li className='mb-4'>
                                    <NavLink 
                                    to="/about"
                                    className={({isActive}) =>`text-base ${isActive ? "text-purple" : "text-white"}`}>
                                        About Us
                                    </NavLink>
                                </li>
                               
                                <li className='mb-4'>
                                    <NavLink 
                                    to="/how-it-works"
                                    className={({isActive}) =>`text-base ${isActive ? "text-purple" : "text-white"}`}>
                                         How It Works
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-md text-white">Get in touch</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link
                                    to="tel:+1 (319) 555-0115"
                                        className="hover:underline inline-flex gap-2 text-white"
                                        rel="noreferrer"
                                    >
                                       <img src="/images/Call.png" alt="" /> +1 (319) 555-0115
                                    </Link>
                                </li>

                                <li className="mb-4">
                                    <Link
                                    to="mailto:info@thinklife.com"
                                        className="hover:underline inline-flex gap-2 text-white"
                                        rel="noreferrer"
                                    >
                                       <img src="/images/email.png" alt="" /> info@thinklife.com
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <span className=' inline-flex gap-2 items-start text-white'>
                                        <img src="/images/Location.png" alt="" />
                                        4517 Washington Ave.
                                        Manchester, 
                                        Kentucky 39495</span>
                                </li>
                                
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-md text-white">Follow Us</h2>
                            <ul className="text-gray-500 font-medium grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 w-24">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        <img src="/images/fb.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        <img src="/images/x.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        <img src="/images/linkedin.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        <img src="/images/insta.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        <img src="/images/tiktok.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        <img src="/images/youtube.png" alt="" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div> 
            </div>
           <div className="mx-auto w-full max-w-screen- xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                                <p className='text-base text-gray-400'>Assurity is a marketing name for the mutual holding company Assurity Group, Inc. and its subsidiaries. Those subsidiaries include but are not limited to: Assurity Life Insurance Company and Assurity Life Insurance Company of New York. Insurance products and services are offered by Assurity Life Insurance Company in all states except New York. In New York, insurance products and services are offered by Assurity Life Insurance Company of New York, Albany, NY. Product availability, features and rates may vary by state.
                                </p>
                    </div>
                    
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        ©️ ThinkLife 2024, All rights reserved 
                    </span>
                   
                </div>
            </div>
           </div>
        </footer>
    </>
  )
}

export default Footer