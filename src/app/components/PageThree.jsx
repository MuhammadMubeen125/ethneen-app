"use client"; // Enables client-side functionality like useState

import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import LogoEthneen from '../../../public/images/LogoEthneen.svg'
import UserNav from "../../../public/images/userNav.svg";
import FileNav from "../../../public/images/fileNav.svg";
import Connector from "../../../public/images/connector.svg";

export const PageThree = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='signupMain flex flex-col lg:flex-row h-screen items-center flex-shrink-0 self-stretch'>
        <section className="signUpSectionOne flex flex-col md:justify-between items-start w-full lg:max-w-[440px] md:h-[100vh] h-[150px] bg-gray-50 relative">
        {/* Logo and Toggle Button */}
        <div className="oneDiv">
        <div className="flex flex-col items-start justify-between gap-[20px] w-full px-8 py-6 lg:py-8">
          <Image src={LogoEthneen} alt="Logo" className="w-[142px] h-[32px]" />
          <div className="flex md:hidden items-center">
          <Image src={UserNav} alt="Logo" className="w-[50px] h-[50px] opacity-[0.5] font-bold flex md:hidden" />
          <Image src={Connector} alt="Logo" className="w-[40px] h-[50px] font-bold flex md:hidden" />
          <Image src={FileNav} alt="Logo" className="w-[50px] h-[50px] opacity-[0.5] flex md:hidden" />
          <Image src={Connector} alt="Logo" className="w-[40px] h-[50px] font-bold flex md:hidden" />
          <Image src={FileNav} alt="Logo" className="w-[50px] h-[50px] flex md:hidden" />
          <Image src={Connector} alt="Logo" className="w-[40px] h-[50px] font-bold flex md:hidden" />
          <Image src={FileNav} alt="Logo" className="w-[50px] h-[50px] opacity-[0.5] flex md:hidden" />
          </div>
          
          

          {/* <button
            className="lg:hidden text-2xl"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="sidebar-menu"
          >
            &#9776; 
          </button> */}
        </div>

        {/* Sidebar Links */}
        <div
          id="sidebar-menu"
          className={`flex flex-col items-start px-8 lg:px-12 py-6 lg:py-8 ${
            menuOpen ? "block" : "hidden lg:flex"
          }`}
        >
          <div className="flex items-start gap-4 opacity-60">
            <img src="/User.svg" alt="User" />
            <div>
              <h6 className="font-bold text-lg">User Type</h6>
              <p className="text-gray-600">What brings you here?</p>
            </div>
          </div>
          <div className="flex items-start gap-4 opacity-60">
            <img src="/FileIcon.svg" alt="File" />
            <div>
              <h6 className="font-bold text-lg">Freelancer Type</h6>
              <p className="text-gray-600">Are you an individual?</p>
            </div>
          </div>
          <div className="flex items-start gap-4 ">
            <img src="/FileIcon.svg" alt="Details" />
            <div>
              <h6 className="font-bold text-lg">Add your details</h6>
              <p className="text-gray-600">Create your [user type] account</p>
            </div>
          </div>
          <div className="flex items-start gap-4 opacity-60">
            <img src="/CodeIcon.svg" alt="Password" />
            <div>
              <h6 className="font-bold text-lg">Confirm your password</h6>
              <p className="text-gray-600">Secure your account</p>
            </div>
          </div>
        </div>
        </div>
        {/* Footer */}
        <div className="hidden md:flex items-center justify-between w-full px-8 py-6 border-t border-gray-200">
          <p className="text-gray-500">© Ethneen 2024</p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <img src="/mailIcon.svg" alt="Email" />
            <a href="mailto:help@ethneen.com" className="hover:text-green-500">
              help@ethneen.com
            </a>
          </div>
        </div>
      </section>


        <section className='signupSectionTwo relative flex w-full flex-col px-[20px] md:px-0 md:items-center items-start md:flex-1 md:self-stretch'>
            <div className="ContainerSectionTwo flex relative w-full px-[32px] py-[22px] flex-col items-center gap-[32px] self-stretch">
                <div className="FormContent flex flex-col items-center md:items-start gap-[32px]">
                    <h1>Add your details</h1>
                    <div className="formContentDivTwo flex flex-col items-start">
                        <div className="formDiv flex md:w-[500px] w-[300px] flex-col items-start pb-[32px] gap-[20px]">
                            <div className="formRowDiv flex flex-col md:flex-row items-start gap-[20px] self-stretch">
                                <div className='labelInput md:w-[250px] w-full flex flex-col gap-[5px]'>
                                <label htmlFor="First name">First name*</label>
                                <input type="text" placeholder='First Name' className='FormInput'/>
                                </div>
                                <div className='labelInput md:w-[250px] w-full flex flex-col gap-[5px]'>
                                <label htmlFor="Last name">Last name*</label>
                                <input type="text" placeholder='Last Name' className='FormInput'/>
                                </div>
                            </div>
                            <div className='labelInput w-full flex flex-col gap-[5px]'>
                                <label htmlFor="Username">Username*</label>
                                <input type="text" placeholder='Username' className='FormInput'/>
                                </div>
                                <div className='labelInput w-full flex flex-col gap-[5px]'>
                                <label htmlFor="Company name">Company name (if any)</label>
                                <input type="text" placeholder='Company name' className='FormInput'/>
                                </div>
                                <div className='labelInput w-full flex flex-col gap-[5px]'>
                                <label htmlFor="Email address">Email address*</label>
                                <input type="text" placeholder='Email address' className='FormInput'/>
                                </div>
                                <div className='labelInput w-full flex flex-col gap-[5px]'>
                                <label htmlFor="Phone number">Phone number*</label>
                                <input type="text" placeholder='Phone number' className='FormInput'/>
                                </div>

                                <div className='flex flex-row gap-[5px] items-center'>
                            <input type="checkbox" name="" id="" />
                        <p>Accept all <span className='text-[#008000]'>Terms and Conditions</span> & <span className='text-[#008000]'>Privacy Policy</span></p>
                        </div>
                        </div>
                        
                        

                        <Link href="/passworddetails" className='GreenBtn'>
                   <span>Set A Password</span></Link>
                    </div>
                </div>
                

                
            </div>

        </section>
    </div>
  )
}


