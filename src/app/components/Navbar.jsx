import React from 'react'
import Image from 'next/image'
import LogoEthneen from '../../../public/images/LogoEthneen.svg'
import searchIcon from '../../../public/images/searchIcon.png'
import messageIcon from '../../../public/images/messageIcon.svg'
import bookMarkIcon from '../../../public/images/bookMarkIcon.svg'
import bellIcon from '../../../public/images/bellIcon.svg'
import userImage from '../../../public/images/userImage.svg'



export const Navbar = () => {
  return (
    <div className='HeaderMain hidden md:flex flex-col items-center self-stretch'>
        <div className="headerinnerDiv flex h-[72px] p-[0px_24px] justify-between items-center self-stretch">
            <div className="headerDivOne flex items-center gap-[48px]">
            <Image src={LogoEthneen} alt="" className='w-[142px] h-[32px]'/>
            <ul className='flex items-center gap-[4px]'>
                <li className='flex items-center gap-2 px-3 py-2'>
                    <a href="#">Ethneen</a>
                </li>
                <li className='flex items-center gap-2 px-3 py-2'>
                    <a href="#">Top Talent</a>
                </li>
                <li className='flex items-center gap-2 px-3 py-2'>
                    <a href="#">Find Jobs</a>
                </li>
                <li className='flex items-center gap-2 px-3 py-2'>
                    <a href="#">Community</a>
                </li>
                <li className='flex items-center gap-2 px-3 py-2'>
                    <a href="#">Contact</a>
                </li>
            </ul>
            </div>
            <div className="headerDivTwo flex items-center gap-[4px]">
                <div className='toggleDiv flex items-center gap-[8px]'>
                <h5>Ready to work</h5>
                <Image src={messageIcon} alt="" className='w-[50px] h-[50px]'/>
                <Image src={bookMarkIcon} alt="" className='w-[50px] h-[50px]'/>
                <Image src={searchIcon} alt="" className='w-[50px] h-[50px]'/>
                <Image src={bellIcon} alt="" className='w-[50px] h-[50px]'/>
                <Image src={userImage} alt="" className='w-[50px] h-[50px]'/>

                </div>
                 
                

            </div>
        </div>
    </div>
  )
}
