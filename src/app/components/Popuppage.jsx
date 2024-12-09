import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoEthneen from '../../../public/images/LogoEthneen.svg'
import StarIcon from '../../../public/images/starIcon.svg'
import HelpIcon from '../../../public/images/HelpIcon.svg'

export const Projectform = () => {
  return (
    <div className='signupMain flex items-center flex-shrink-0 self-stretch'>
        <section className='signUpSectionOne flex max-w-[440px] flex-col justify-between items-start flex-1 self-stretch'>
            <div className="ConainerSignup flex pt-8 pb-0 px-8 flex-col items-start gap-[80px] self-stretch">
            <Image src={LogoEthneen} alt="" className='w-[142px] h-[32px]'/>
            <div className="subContainer flex pr-[32px] flex-col items-start gap-[32px] self-stretch">
                    <div className="subContainerContent flex flex-col items-start self-stretch">
                        <div className="listItem flex items-start gap-[16px] self-stretch">
                            <img src="/images/file2Icon.svg" alt="" />
                            <div className="textDiv flex flex-col pb-[32px] items-start gap-[2px] flex-1">
                                <h6>Project Intro</h6>
                                <p>Add title and description to your project</p>
                            </div>
                        </div>
                        <div className="listItem opacity-[0.6] flex items-start gap-[16px] self-stretch">
                            <img src="/images/galleryIcon.svg" alt="" />
                            <div className="textDiv flex flex-col pb-[32px] items-start gap-[2px] flex-1">
                                <h6>Upload Gallery</h6>
                                <p>Are you an individual?</p>
                            </div>
                        </div>
                        <div className="listItem opacity-[0.6] flex items-start gap-[16px] self-stretch">
                            <img src="/images/SaleIcon.svg" alt="" />
                            <div className="textDiv flex flex-col pb-[32px] items-start gap-[2px] flex-1">
                                <h6>Packages and Charges</h6>
                                <p>Add what you offer and your charges</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            
            <div className="SectionOneEndDiv flex h-[96px] p-[32px] justify-between items-end self-stretch">
                <p>© Ethneen 2024</p>
                <div className="EmailDiv flex items-center gap-[8px]">
                    <img src="/mailIcon.svg" alt="" />
                    <a href="#">help@ethneen.com</a>
                </div>
            </div>
        </section>

        <section className='signupSectionTwo flex min-w-[400px] flex-col items-center flex-1 self-stretch'>
            <div className="ContainerSectionTwo flex p-[32px] flex-col items-center gap-[32px] self-stretch">
                <div className="formmainDiv flex flex-col w-[576px] items-start gap-[32px]">
                    <div className="headerDiv flex w-full justify-between items-center self-stretch">
                        <h5>Project Intro</h5>
                        <Link href="/dashboard" className='GreenBtn'>
                        <Image src={StarIcon} alt="" className='w-[20px] h-[20px]'/>
                   <span>Write with Noor</span></Link>
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
    </div>
  )
}
