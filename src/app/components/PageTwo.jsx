"use client"; // Enables client-side functionality like useState

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoEthneen from "../../../public/images/LogoEthneen.svg";
import OneUser from "../../../public/images/oneUser.svg";
import MultiUser from "../../../public/images/MultiUser.svg";
import UserNav from "../../../public/images/userNav.svg";
import FileNav from "../../../public/images/fileNav.svg";
import Connector from "../../../public/images/connector.svg";

const PageTwo = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  return (

    <div className="signupMain flex flex-col lg:flex-row h-screen items-center flex-shrink-0 self-stretch">
      {/* Sidebar Section */}
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
          <div className="flex items-start gap-4">
            <img src="/FileIcon.svg" alt="File" />
            <div>
              <h6 className="font-bold text-lg">Freelancer Type</h6>
              <p className="text-gray-600">Are you an individual?</p>
            </div>
          </div>
          <div className="flex items-start gap-4 opacity-60">
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

      {/* Main Content Section */}
      <section className="signupSectionTwo flex flex-col items-center justify-center w-full lg:flex-1 px-6 lg:px-16 py-12 lg:py-20 bg-white">
        <div className="flex flex-col items-center gap-8 w-full max-w-[500px]">
          <div className="text-center">
            <img src="/UserCheckIcon.svg" alt="User Check" className="mx-auto" />
            <h1 className="text-2xl lg:text-3xl font-bold mt-4">
            Are you an individual or company?
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 w-full">
            <div className="UserCard bg-gray-100 flex flex-col items-center justify-center p-4 gap-2 w-full rounded-md shadow-sm cursor-pointer hover:shadow-md">
            <Image src={OneUser} alt="Logo" className="w-[50px] h-[50px]" />

              <p>
                <span className="text-green-600">Individual</span>
              </p>
            </div>
            <div className="UserCard bg-gray-100 flex flex-col items-center justify-center p-4 gap-2 w-full rounded-md shadow-sm cursor-pointer hover:shadow-md">
            <Image src={MultiUser} alt="Logo" className="w-[50px] h-[50px]" />

              <p>
                <span className="text-green-600">Company</span>
              </p>
            </div>
          </div>
          <Link
            href="/onboardingdetails"
            className="GreenBtn bg-green-600 text-white text-center py-3 px-6 rounded-md hover:bg-green-700 transition"
          >
            Continue
          </Link>
        </div>
      </section>
    </div>

    // <div className='signupMain flex h-[650px] items-center flex-shrink-0 self-stretch'>
    //     <section className='signUpSectionOne flex h-[100vh] max-w-[440px] flex-col justify-between items-start flex-1 self-stretch'>
    //         <div className="ConainerSignup flex pt-8 pb-0 px-8 flex-col items-start gap-[80px] self-stretch">
    //         <Image src={LogoEthneen} alt="" className='w-[142px] h-[32px]'/>
    //         <div className="subContainer flex pr-[32px] flex-col items-start gap-[32px] self-stretch">
    //                 <div className="subContainerContent flex flex-col items-start self-stretch">
    //                     <div className="listItem opacity-[0.6] flex items-start gap-[16px] self-stretch">
    //                         <img src="/User.svg" alt="" />
    //                         <div className="textDiv flex flex-col pb-[32px] items-start gap-[2px] flex-1">
    //                             <h6>User Type</h6>
    //                             <p>What brings you here?</p>
    //                         </div>
    //                     </div>
    //                     <div className="listItem flex items-start gap-[16px] self-stretch">
    //                         <img src="/FileIcon.svg" alt="" />
    //                         <div className="textDiv flex flex-col pb-[32px] items-start gap-[2px] flex-1">
    //                             <h6>Freelancer Type</h6>
    //                             <p>Are you an individual?</p>
    //                         </div>
    //                     </div>
    //                     <div className="listItem opacity-[0.6] flex items-start gap-[16px] self-stretch">
    //                         <img src="/FileIcon.svg" alt="" />
    //                         <div className="textDiv flex flex-col pb-[32px] items-start gap-[2px] flex-1">
    //                             <h6>Add your details</h6>
    //                             <p>Create your user type account</p>
    //                         </div>
    //                     </div>
    //                     <div className="listItem opacity-[0.6] flex items-start gap-[16px] self-stretch">
    //                         <img src="/CodeIcon.svg" alt="" />
    //                         <div className="textDiv flex flex-col pb-[32px] items-start gap-[2px] flex-1">
    //                             <h6>Confirm you password</h6>
    //                             <p>Secure your account</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
            
    //         <div className="SectionOneEndDiv flex h-[96px] p-[32px] justify-between items-end self-stretch">
    //             <p>© Ethneen 2024</p>
    //             <div className="EmailDiv flex items-center gap-[8px]">
    //                 <img src="/mailIcon.svg" alt="" />
    //                 <a href="#">help@ethneen.com</a>
    //             </div>
    //         </div>
    //     </section>

    //     <section className='signupSectionTwo flex min-w-[400px] p-[160px] flex-col items-center flex-1 self-stretch'>
    //         <div className="ContainerSectionTwo flex p-[32px] flex-col items-center gap-[32px] self-stretch">
    //             <div className="SectionTwoContent flex flex-col items-center gap-[32px]">
    //                 <img src="/UserCheckIcon.svg" alt="" />
    //                 <h1>Are you an individual or company?</h1>
    //             </div>
    //             <div className="UserSelectDiv flex flex-col items-center gap-[24px]">
    //                 <div className="userRow flex w-full items-start gap-[12px]">
    //                     <div className="UserCard w-full flex p-[16px] items-start gap-[4px] flex-1">
    //                         <div className="UserCardContent w-full flex flex-col justify-center items-center gap-[12px] flex-1">
    //                             <img src="/singleUser.svg" alt="" />
    //                             <p>Individual</p>
    //                         </div>
    //                     </div>
    //                     <div className="UserCard w-full flex p-[16px] items-start gap-[4px] flex-1">
    //                         <div className="UserCardContent w-full flex flex-col justify-center items-center gap-[12px] flex-1">
    //                             <img src="/MultiUser.svg" alt="" />
    //                             <p>Company</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>

    //             <div className='btnDiv w-[500px]'>
    //             <Link href="/onboardingdetails" className='GreenBtn'>
    //                <span>Continue</span></Link>
    //             </div>

                
    //         </div>

    //     </section>
    // </div>
  )
}

export default PageTwo;
