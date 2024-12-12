"use client"; // Enables client-side functionality like useState

import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import LogoEthneen from '../../../public/images/LogoEthneen.svg'
import UserNav from "../../../public/images/userNav.svg";
import FileNav from "../../../public/images/fileNav.svg";
import Connector from "../../../public/images/connector.svg";

export const PageFour = () => {
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
          <Image src={FileNav} alt="Logo" className="w-[50px] h-[50px] flex md:hidden" />
          <Image src={Connector} alt="Logo" className="w-[40px] h-[50px] font-bold flex md:hidden" />
          <Image src={FileNav} alt="Logo" className="w-[50px] h-[50px] opacity-[0.5] flex md:hidden" />
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


        <section className='signupSectionTwo flex flex-col items-center justify-center flex-1 self-stretch'>
            <div className="ContainerSectionTwo flex md:p-[32px] p-[20px] flex-col items-center gap-[32px] self-stretch">
               <div className="passwordContainer flex md:px-[32px] py-0 gap-[80px] flex-col items-center self-stretch">
                <div className="passwordContainerContent flex md:w-[552px] w-full flex-col items-start gap-[32px]">
                    <div className="passHeadings flex flex-col items-start gap-[12px] self-stretch">
                        <h2>Choose a password</h2>
                        <p>Must be at least 8 characters.</p>
                    </div>
                    <div className='labelInput flex w-full flex-col gap-[5px]'>
                                <label htmlFor="Password">Password*</label>
                                <input type="text" placeholder='Choose a password' className='FormInput'/>
                                </div>
                                <div className='labelInput w-full flex flex-col gap-[5px]'>
                                <label htmlFor="Password">Password*</label>
                                <input type="text" placeholder='Confirm password' className='FormInput'/>
                                </div>

                                <Link href="/maindashboard" className='GreenBtn'>
                   <span>Continue Signup</span></Link>
                </div>
               </div>
                

                
            </div>

        </section>
    </div>
  )
}


