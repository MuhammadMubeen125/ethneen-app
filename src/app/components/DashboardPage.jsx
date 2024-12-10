import React from 'react'
import { Navbar } from './Navbar'
import Link from 'next/link'
import Image from 'next/image'
import plusSign from '../../../public/images/plusSign.svg'
import ArrowIcon from '../../../public/images/arrow-narrow-up-right.svg'
import PencilIcon from '../../../public/images/pencilIcon.svg'
import greenArrow from '../../../public/images/greenArrow.svg'
import redArrow from '../../../public/images/redArrow.svg'
import { SideBar } from './SideBar'

export const DashboardPage = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex flex-row'>
            <SideBar/>
        {/* <div className='sideBarNav flex h-[938px] w-[280px] items-start self-stretch'>
            
        </div> */}
        <div className='mainSectionDashboard  flex p-[32px_0px] flex-col items-start gap-[24px] flex-1'>
            <div className="mainHeader flex p-[0px_32px] flex-row justify-between items-start gap-[24px] self-stretch">
                <div className="mainHeadings flex min-w-[320px] flex-col items-start gap-[4px] flex-1">
                    <h5>Welcome back, Afifa</h5>
                    <p>Monitor your jobs, orders and payment history. </p>
                </div>
                <Link href="/dashboard" className='GreenBtn'>
                   <span>Upgrade to Ethneen Pro</span></Link>
            </div>

            <div className="uppercardSection flex p-[0px_32px] flex-row items-start gap-[24px] self-stretch">
                <div className="upperCard flex p-[24px] flex-col items-start gap-[12px] flex-1">
                    <h2>Wallet Balance</h2>
                    <div className='numberDIvCard flex items-end gap-[16px] flex-1'>
                    <p>$166.00</p>
                    <span className='flex  items-center text-green-500'>
                    <Image src={greenArrow} alt="" className='w-[20px] h-[20px]'/>

                      12%</span>
                    </div>
                    
                </div>
                <div className="upperCard flex p-[24px] flex-col items-start gap-[12px] flex-1">
                    <h2>Total Projects</h2>
                    <div className='numberDIvCard flex items-end gap-[16px] flex-1'>
                    <p>30</p>
                    <span className='flex  items-center text-red-500'>
                    <Image src={redArrow} alt="" className='w-[20px] h-[20px]'/>

                      2</span>
                    </div>
                    
                </div>
                <div className="upperCard flex p-[24px] flex-col items-start gap-[12px] flex-1">
                    <h2>Completed Orders</h2>
                    <div className='numberDIvCard flex items-end gap-[16px] flex-1'>
                    <p>18</p>
                    <span className='flex  items-center text-green-500'>
                    <Image src={greenArrow} alt="" className='w-[20px] h-[20px]'/>

                      2</span>
                    </div>
                    
                </div>
                <div className="upperCard flex p-[24px] flex-col items-start gap-[12px] flex-1">
                    <h2>Active Orders</h2>
                    <div className='numberDIvCard flex items-end gap-[16px] flex-1'>
                    <p>24</p>
                    <span className='flex  items-center text-green-500'>
                    <Image src={greenArrow} alt="" className='w-[20px] h-[20px]'/>

                      2</span>
                    </div>
                    
                </div>
            </div>

            <div className="dashStatsContainer flex p-[32px] items-center gap-[24px] self-stretch">
                <div className="orderStatDiv max-w-[712px] flex flex-col items-start flex-1">
                    <div className="orderStateHeading flex pt-5 pr-6 pb-5 pl-6">
                    <div className="orderStateHeadingText w-[434px] flex h-[52px] flex-col justify-center items-start gap-[4px] flex-1">
                        <div className='flex flex-row items-center gap-[8px]'>
                            <h5>Latest Orders</h5>
                            <span className='orderCounter p-[2px_6px] items-center'>
                                24 Orders
                            </span>
                        </div>
                        <p>Keep track of your orders and their payment status.</p>
                    </div>
                    
                    <div className='statsBtnDiv flex items-center gap-[12px]'>
                    <Link href="#" className='WhiteBtn'>
                   <span>View all</span></Link>
                    
                    <Link href="#" className='GreenBtn'>
                   <span className='flex gap-[4px]'>
                   <Image src={plusSign} alt="" className='w-[20px] h-[20px]'/>
                    Add order   </span></Link>
                    </div>
                    </div>

                    <div className="statsTableDiv flex items-start self-stretch">
                    <table className="custom-table">
      <thead>
        <tr>
          <th>Budget</th>
          <th>Delivery Time</th>
          <th>Date Created</th>
          <th>Payment Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>$50.00</td>
          <td>3 days</td>
          <td>22 Jan 2024</td>
          <td><span className="status completed">● Completed</span></td>
          <td><Image src={ArrowIcon} alt="" className='w-[20px] h-[20px]'/>
          </td>
        </tr>
        <tr>
          <td>$200.00</td>
          <td>Less than a week</td>
          <td>20 Jan 2024</td>
          <td><span className="status completed">● Completed</span></td>
          <td><Image src={ArrowIcon} alt="" className='w-[20px] h-[20px]'/>
          </td>
        </tr>
        <tr>
          <td>$123.00</td>
          <td>3 days</td>
          <td>24 Jan 2024</td>
          <td><span className="status completed">● Completed</span></td>
          <td><Image src={ArrowIcon} alt="" className='w-[20px] h-[20px]'/>
          </td>
        </tr>
        <tr>
          <td>$200.00</td>
          <td>3 days</td>
          <td>26 Jan 2024</td>
          <td><span className="status completed">● Completed</span></td>
          <td><Image src={ArrowIcon} alt="" className='w-[20px] h-[20px]'/>
          </td>
        </tr>
        <tr>
          <td>$300.00</td>
          <td>3 days</td>
          <td>18 Jan 2024</td>
          <td><span className="status completed">● Completed</span></td>
          <td><Image src={ArrowIcon} alt="" className='w-[20px] h-[20px]'/>
          </td>
        </tr>
        <tr>
          <td>$50.00</td>
          <td>Less than a week</td>
          <td>28 Jan 2024</td>
          <td><span className="status completed">● Completed</span></td>
          <td><Image src={ArrowIcon} alt="" className='w-[20px] h-[20px]'/>
          </td>
        </tr>
        <tr>
          <td>$200.00</td>
          <td>3 days</td>
          <td>16 Jan 2024</td>
          <td><span className="status pending">● Pending</span></td>
          <td><Image src={ArrowIcon} alt="" className='w-[20px] h-[20px]'/>
          </td>
        </tr>
      </tbody>
    </table>
                    </div>
                </div>
                
                <div className="projectDiv flex w-[360px] flex-col items-start">
                    <div className="projectDivHeadings flex pt-5 pr-6 pb-5 pl-6 items-center justify-between gap-[6px] self-stretch">
                        <h5>Latest Projects</h5>
                        <Link href="/ProjectForm" className='GreenBtn'>
                   <span className='flex gap-[4px]'>
                   <Image src={plusSign} alt="" className='w-[20px] h-[20px]'/>
                   Create A Project</span></Link>

                    </div>
                    <table class="project-table flex flex-col item-start">
      <thead>
        <tr>
          <th>Project Title</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Looking for Webflow Designer <Image src={PencilIcon} alt="" className='w-[20px] h-[20px]'/>
          </td>
        </tr>
        <tr>
          <td>Testing hourly job <Image src={PencilIcon} alt="" className='w-[20px] h-[20px]'/></td>
        </tr>
        <tr>
          <td>Hourly job <Image src={PencilIcon} alt="" className='w-[20px] h-[20px]'/></td>
        </tr>
        <tr>
          <td>E-Commerce Store Project in Laravel and VueJS 3 for hourly basis <Image src={PencilIcon} alt="" className='w-[20px] h-[20px]'/></td>
        </tr>
        <tr>
          <td>I need a highly experienced Laravel developer for hourly basis <Image src={PencilIcon} alt="" className='w-[20px] h-[20px]'/></td>
        </tr>
        <tr>
          <td>Looking for Webflow Designer <Image src={PencilIcon} alt="" className='w-[20px] h-[20px]'/></td>
        </tr>
        <tr>
          <td>Testing hourly job <Image src={PencilIcon} alt="" className='w-[20px] h-[20px]'/></td>
        </tr>
      </tbody>
    </table>
                </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}
