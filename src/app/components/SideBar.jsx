import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SB1 from '../../../public/images/SB1.svg'
import SB2 from '../../../public/images/SB2.svg'
import SB3 from '../../../public/images/SB3.svg'
import SB4 from '../../../public/images/SB4.svg'
import SB5 from '../../../public/images/SB5.svg'
import SB6 from '../../../public/images/SB6.svg'
import SB7 from '../../../public/images/SB7.svg'
import SB8 from '../../../public/images/SB8.svg'
import SB9 from '../../../public/images/SB9.svg'
import SB10 from '../../../public/images/SB10.svg'
import supportIcon from '../../../public/images/supportIcon.svg'
import settingIcon from '../../../public/images/settingIcon.svg'
import userImage from '../../../public/images/userImage.svg'


export const SideBar = () => {
  return (
    <div className='sideBarNav flex w-[280px] items-start self-stretch'>
        <div className="sideBarInnerDiv flex flex-col justify-between items-start flex-1 self-stretch">
            <div className="sideBarNavlinks flex pt-[32px] flex-col items-start gap-[24px] self-stretch">
                <ul className='flex p-[0px_16px] flex-col items-start gap-[4px] self-stretch'>
                    <li className='navLink'>
                    <Image src={SB1} alt="" className='imgOne w-[24px] h-[24px]'/>
                    <span>Dashboard</span>
                    </li>
                    <li className='navLink'>
                    <Image src={SB2} alt="" className='imgTwo w-[24px] h-[24px]'/>
                    <span>Proposals</span>
                    
                    </li>
                    <li className='navLink'>
                    <Image src={SB3} alt="" className='imgThree w-[24px] h-[24px]'/>
                    <span>Orders</span>
                    
                    </li>
                    <li className='navLink'>
                    <Image src={SB4} alt="" className='imgFour w-[24px] h-[24px]'/>
                    <span>Offers</span>
                    
                    </li>
                    <li className='navLink'>
                    <Image src={SB5} alt="" className='imgFive w-[24px] h-[24px]'/>
                    <span>Wallet</span>
                    
                    </li>
                    <li className='navLink'>
                    <Image src={SB6} alt="" className='imgSix w-[24px] h-[24px]'/>
                    <span>Academy</span>
                    
                    </li>
                    <li className='navLink'>
                    <Image src={SB7} alt="" className='imgSeven w-[24px] h-[24px]'/>
                    <span>Community</span>
                    
                    </li>
                    <li className='navLink'>
                    <Image src={SB8} alt="" className='imgEight w-[24px] h-[24px]'/>
                    <span>Withdraw HIstory</span>
                    
                    </li>
                    <li className='navLink'>
                    <Image src={SB9} alt="" className='imgNine w-[24px] h-[24px]'/>
                    <span>Subscription</span>
                    
                    </li>
                    <li className='navLink'>
                    <Image src={SB10} alt="" className='imgTen w-[24px] h-[24px]'/>
                    <span>Identity Verification</span>
                    
                    </li>

                </ul>
            </div>

            <div className="infoDiv flex p-[16px] flex-col items-start gap-[24px] self-stretch">
                <ul className='navLinkFooter ps-[10px] flex flex-col items-start gap-[10px] self-stretch'>
                  <li>English</li>
                  <li className='flex gap-[8px]'>
                  <Image src={supportIcon} alt="" className='imgTen w-[24px] h-[24px]'/>
                  <span>Support</span>
                  </li>
                  <li className='flex gap-[8px]'>
                  <Image src={settingIcon} alt="" className='imgTen w-[24px] h-[24px]'/>
                  <span>Settings</span>
                  </li>
                </ul>

                <div className='flex pt-6 pr-8 pb-6 pl-2 items-center gap-[16px] self-stretch'>
                  <div className='userIconDivFOoter flex items-center gap-[12px] flex-1'>
                  <Image src={userImage} alt="" className='w-[50px] h-[50px]'/>
                  <div className="textDiv flex flex-col items-start">
                    <h5>Afifa</h5>
                    <p>afifa@ethneen.com</p>
                  </div>
                  </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}
