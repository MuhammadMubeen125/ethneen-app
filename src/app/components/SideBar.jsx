"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoEthneen from '../../../public/images/LogoEthneen.svg'
import SB1 from '../../../public/images/SB1.svg';
import SB2 from '../../../public/images/SB2.svg';
import SB3 from '../../../public/images/SB3.svg';
import SB4 from '../../../public/images/SB4.svg';
import SB5 from '../../../public/images/SB5.svg';
import SB6 from '../../../public/images/SB6.svg';
import SB7 from '../../../public/images/SB7.svg';
import SB8 from '../../../public/images/SB8.svg';
import SB9 from '../../../public/images/SB9.svg';
import SB10 from '../../../public/images/SB10.svg';
import supportIcon from '../../../public/images/supportIcon.svg';
import settingIcon from '../../../public/images/settingIcon.svg';
import userImage from '../../../public/images/userImage.svg';

export const SideBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className='sideBarNav hidden md:flex w-[280px] items-start self-stretch'>
        <div className="sideBarInnerDiv flex flex-col justify-between items-start flex-1 self-stretch">
          <div className="sideBarNavlinks flex pt-[32px] flex-col items-start gap-[24px] self-stretch">
            <ul className='flex p-[0px_16px] flex-col items-start gap-[4px] self-stretch'>
              <li className='navLink active'>
                <Image src={SB1} alt="" className='imgOne w-[24px] h-[24px]' />
                <span className='activeSpan'>Dashboard</span>
              </li>
              <li className='navLink'>
                <Image src={SB2} alt="" className='imgTwo w-[24px] h-[24px]' />
                <span>Proposals</span>
              </li>
              <li className='navLink'>
                <Image src={SB3} alt="" className='imgThree w-[24px] h-[24px]' />
                <span>Orders</span>
              </li>
              <li className='navLink'>
                <Image src={SB4} alt="" className='imgFour w-[24px] h-[24px]' />
                <span>Offers</span>
              </li>
              <li className='navLink'>
                <Image src={SB5} alt="" className='imgFive w-[24px] h-[24px]' />
                <span>Wallet</span>
              </li>
              <li className='navLink'>
                <Image src={SB6} alt="" className='imgSix w-[24px] h-[24px]' />
                <span>Academy</span>
              </li>
              <li className='navLink'>
                <Image src={SB7} alt="" className='imgSeven w-[24px] h-[24px]' />
                <span>Community</span>
              </li>
              <li className='navLink'>
                <Image src={SB8} alt="" className='imgEight w-[24px] h-[24px]' />
                <span>Withdraw History</span>
              </li>
              <li className='navLink'>
                <Image src={SB9} alt="" className='imgNine w-[24px] h-[24px]' />
                <span>Subscription</span>
              </li>
              <li className='navLink'>
                <Image src={SB10} alt="" className='imgTen w-[24px] h-[24px]' />
                <span>Identity Verification</span>
              </li>
            </ul>
          </div>

          <div className="infoDiv flex p-[16px] flex-col items-start gap-[24px] self-stretch">
            <ul className='navLinkFooter ps-[10px] flex flex-col items-start gap-[10px] self-stretch'>
              <li>English</li>
              <a href="#">
                <li className='navFooterLinks'>
                  <Image src={supportIcon} alt="" className='imgTen w-[24px] h-[24px]' />
                  <span>Support</span>
                </li>
              </a>
              <a href="#">
                <li className='navFooterLinks'>
                  <Image src={settingIcon} alt="" className='imgTen w-[24px] h-[24px]' />
                  <span>Settings</span>
                </li>
              </a>
            </ul>

            <div className='flex pt-6 pr-8 pb-6 pl-2 items-center gap-[16px] self-stretch'>
              <div className='userIconDivFooter flex items-center gap-[12px] flex-1'>
                <Image src={userImage} alt="" className='w-[50px] h-[50px]' />
                <div className="textDiv flex flex-col items-start">
                  <h5>Afifa</h5>
                  <p>afifa@ethneen.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar for mobile screens */}
      <div className="md:hidden flex flex-col w-full">
        <div className="flex items-center justify-between p-4 bg-white text-black shadow-md">
        <Image src={LogoEthneen} alt="" className='w-[142px] h-[32px]'/>
          <button
            onClick={toggleMobileMenu}
            className="text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Slide-In */}
        <div
          className={`fixed top-0 left-0 h-full w-[280px] bg-white text-black transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out shadow-lg z-50`}
        >
          <div className="flex flex-col p-4 gap-4">
            <button
              className="text-black text-right"
              onClick={closeMobileMenu}
            >
              Close
            </button>
            <ul className="flex flex-col gap-4">
              <li>Dashboard</li>
              <li>Proposals</li>
              <li>Orders</li>
              <li>Offers</li>
              <li>Wallet</li>
              <li>Academy</li>
              <li>Community</li>
              <li>Withdraw History</li>
              <li>Subscription</li>
              <li>Identity Verification</li>
            </ul>
          </div>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
            onClick={closeMobileMenu}
          ></div>
        )}
      </div>
    </>
  );
};














// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import SB1 from '../../../public/images/SB1.svg'
// import SB2 from '../../../public/images/SB2.svg'
// import SB3 from '../../../public/images/SB3.svg'
// import SB4 from '../../../public/images/SB4.svg'
// import SB5 from '../../../public/images/SB5.svg'
// import SB6 from '../../../public/images/SB6.svg'
// import SB7 from '../../../public/images/SB7.svg'
// import SB8 from '../../../public/images/SB8.svg'
// import SB9 from '../../../public/images/SB9.svg'
// import SB10 from '../../../public/images/SB10.svg'
// import supportIcon from '../../../public/images/supportIcon.svg'
// import settingIcon from '../../../public/images/settingIcon.svg'
// import userImage from '../../../public/images/userImage.svg'


// export const SideBar = () => {
//   return (
//     <div className='sideBarNav hidden md:flex w-[280px] items-start self-stretch'>
//         <div className="sideBarInnerDiv flex flex-col justify-between items-start flex-1 self-stretch">
//             <div className="sideBarNavlinks flex pt-[32px] flex-col items-start gap-[24px] self-stretch">
//                 <ul className='flex p-[0px_16px] flex-col items-start gap-[4px] self-stretch'>
//                     <li className='navLink active'>
//                     <Image src={SB1} alt="" className='imgOne w-[24px] h-[24px]'/>
//                     <span className='activeSpan'>Dashboard</span>
//                     </li>
//                     <li className='navLink'>
//                     <Image src={SB2} alt="" className='imgTwo w-[24px] h-[24px]'/>
//                     <span>Proposals</span>
                    
//                     </li>
//                     <li className='navLink'>
//                     <Image src={SB3} alt="" className='imgThree w-[24px] h-[24px]'/>
//                     <span>Orders</span>
                    
//                     </li>
//                     <li className='navLink'>
//                     <Image src={SB4} alt="" className='imgFour w-[24px] h-[24px]'/>
//                     <span>Offers</span>
                    
//                     </li>
//                     <li className='navLink'>
//                     <Image src={SB5} alt="" className='imgFive w-[24px] h-[24px]'/>
//                     <span>Wallet</span>
                    
//                     </li>
//                     <li className='navLink'>
//                     <Image src={SB6} alt="" className='imgSix w-[24px] h-[24px]'/>
//                     <span>Academy</span>
                    
//                     </li>
//                     <li className='navLink'>
//                     <Image src={SB7} alt="" className='imgSeven w-[24px] h-[24px]'/>
//                     <span>Community</span>
                    
//                     </li>
//                     <li className='navLink'>
//                     <Image src={SB8} alt="" className='imgEight w-[24px] h-[24px]'/>
//                     <span>Withdraw HIstory</span>
                    
//                     </li>
//                     <li className='navLink'>
//                     <Image src={SB9} alt="" className='imgNine w-[24px] h-[24px]'/>
//                     <span>Subscription</span>
                    
//                     </li>
//                     <li className='navLink'>
//                     <Image src={SB10} alt="" className='imgTen w-[24px] h-[24px]'/>
//                     <span>Identity Verification</span>
                    
//                     </li>

//                 </ul>
//             </div>

//             <div className="infoDiv flex p-[16px] flex-col items-start gap-[24px] self-stretch">
//                 <ul className='navLinkFooter ps-[10px] flex flex-col items-start gap-[10px] self-stretch'>
//                   <li>English</li>
//                   <a href="#">
//                   <li className='navFooterLinks'>
//                   <Image src={supportIcon} alt="" className='imgTen w-[24px] h-[24px]'/>
//                   <span>Support</span>
//                   </li>
//                   </a>
                  
//                   <a href="#">
//                   <li className='navFooterLinks'>
//                   <Image src={settingIcon} alt="" className='imgTen w-[24px] h-[24px]'/>
//                   <span>Settings</span>
//                   </li>
//                   </a>
                  
//                 </ul>

//                 <div className='flex pt-6 pr-8 pb-6 pl-2 items-center gap-[16px] self-stretch'>
//                   <div className='userIconDivFooter flex items-center gap-[12px] flex-1'>
//                   <Image src={userImage} alt="" className='w-[50px] h-[50px]'/>
//                   <div className="textDiv flex flex-col items-start">
//                     <h5>Afifa</h5>
//                     <p>afifa@ethneen.com</p>
//                   </div>
//                   </div>
//                 </div>
            
//             </div>
//         </div>
//     </div>
//   )
// }
