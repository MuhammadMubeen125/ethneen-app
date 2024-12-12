'use client';
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import LogoEthneen from '../../../public/images/LogoEthneen.svg'
import FileIcon from '../../../public/images/file2Icon.svg'
import FileNav from '../../../public/images/fileNav.svg'
import SaleNav from '../../../public/images/SaleNav.svg'
import GalleryNav from '../../../public/images/galleryNav.svg'
import StarIcon from '../../../public/images/starIcon.svg'
import HelpIcon from '../../../public/images/HelpIcon.svg'
import Popup from '../components/Popup';
import PopupContent from '../components/PopupContent';
import Connector from "../../../public/images/connector.svg";

export const Projectform = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

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
          <Image src={FileNav} alt="Logo" className="w-[50px] h-[50px] font-bold flex md:hidden" />
          <Image src={Connector} alt="Logo" className="w-[40px] h-[50px] font-bold flex md:hidden" />
          <Image src={GalleryNav} alt="Logo" className="w-[50px] h-[50px] opacity-[0.5] flex md:hidden" />
          <Image src={Connector} alt="Logo" className="w-[40px] h-[50px] font-bold flex md:hidden" />
          <Image src={SaleNav} alt="Logo" className="w-[50px] h-[50px] opacity-[0.5] flex md:hidden" />
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
          <div className="flex items-start gap-4 ">
            <img src="/images/file2Icon.svg" alt="User" />
            <div>
              <h6 className="font-bold text-lg">Project Intro</h6>
              <p className="text-gray-600">Add title and description to your project</p>
            </div>
          </div>
          <div className="flex items-start gap-4 opacity-60">
            <img src="/images/galleryIcon.svg" alt="File" />
            <div>
              <h6 className="font-bold text-lg">Upload Gallery</h6>
              <p className="text-gray-600">Add some images to your project</p>
            </div>
          </div>
          <div className="flex items-start gap-4 opacity-60">
            <img src="/images/SaleIcon.svg" alt="Details" />
            <div>
              <h6 className="font-bold text-lg">Packages and Charges</h6>
              <p className="text-gray-600">Add what you offer and your charges</p>
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

        <section className='signupSectionTwo flex flex-col items-center flex-1 self-stretch'>
            <div className="ContainerSectionTwo flex md:p-[32px] p-[20px] flex-col items-center gap-[32px] self-stretch">
                <div className="formmainDiv flex flex-col sm:w-full md:w-[576px] items-start gap-[32px]">
                    <div className="headerDiv flex w-full justify-between items-center self-stretch">
                        <h5>Project Intro</h5>
                        <Link href="#" className="GreenBtn" onClick={() => setIsPopupOpen(true)}>
                <Image
                  src={StarIcon}
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                <span>Write with Noor</span>
              </Link>
                    </div>
                    <div className='inputDiv flex flex-col items-start gap-[6px] self-stretch'>
                    <label htmlFor="Category">Select Category</label>
                    <select name="Category" id="" className='inputSelect w-full'>
                        <option value="None">Option One</option>
                    </select>
                    </div>
                    <div className='inputDiv flex flex-col items-start gap-[6px] self-stretch'>
                    <label htmlFor="Category">Select Sub Category</label>
                    <select name="Category" id="" className='inputSelect w-full'>
                        <option value="None">Option One</option>
                    </select>
                    </div>
                    <div className='inputDiv flex flex-col items-start gap-[6px] self-stretch'>
                    <label htmlFor="Category">What are you offering to clients?</label>
                    <input type="text" placeholder='What are you offering to clients?' name="" id="" className='inputSelect w-full'/>
                    </div>

                    <div className='inputDiv flex flex-col items-start gap-[6px] self-stretch'>
                    <label htmlFor="Category">Write a description about your service</label>
                    <textarea name="" placeholder='Write a description about your service' id="" rows="3" cols="3" className='inputSelect w-full h-[86px]'></textarea>
                    </div>

                    <div className='inputDiv flex flex-col items-start gap-[6px] self-stretch'>
                        <div className='flex justify-between items-center self-stretch'>
                        <label htmlFor="Category">Meta Title - ideal length is 50–60 characters (optional)</label>
                        <Image src={HelpIcon} alt="" className='w-[16px] h-[16px]'/>

                        </div>
                    
                    <input type="text" placeholder='Enter Meta title' name="" id="" className='inputSelect w-full'/>
                    </div>
                    <div className='inputDiv flex flex-col items-start gap-[6px] self-stretch'>
                        <div className='flex justify-between items-center self-stretch'>
                        <label htmlFor="Category">Meta Description - ideal length is 150-160 characters (optional)</label>
                        <Image src={HelpIcon} alt="" className='w-[16px] h-[16px]'/>

                        </div>
                    
                    <input type="text" placeholder='Enter Meta description' name="" id="" className='inputSelect w-full'/>
                    </div>
                    <Link href="/dashboard" className='GreenBtn'>
                   <span>Continue</span></Link>
                    
                </div>
                
            </div>

        </section>
        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <PopupContent />
      </Popup>
    </div>
    
  )
}
