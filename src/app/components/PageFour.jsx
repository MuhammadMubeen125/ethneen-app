import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoEthneen from '../../../public/images/LogoEthneen.svg'

export const PageFour = () => {
  return (
    <div className='signupMain flex h-[650px] items-center flex-shrink-0 self-stretch'>
        <section className='signUpSectionOne flex max-w-[440px] flex-col justify-between items-start flex-1 self-stretch'>
            <div className="ConainerSignup flex pt-8 pb-0 px-8 flex-col items-start gap-[80px] self-stretch">
                <Image src={LogoEthneen} alt="" className='w-[142px] h-[32px]'/>
                <div className="subContainer flex pr-[32px] flex-col items-start gap-[32px] self-stretch">
                    <div className="subContainerContent flex flex-col items-start self-stretch">
                        <div className="listItem opacity-[0.6] flex items-start gap-[16px] self-stretch">
                            <img src="/User.svg" alt="" />
                            <div className="textDiv flex flex-col pb-[32px] items-start gap-[2px] flex-1">
                                <h6>User Type</h6>
                                <p>What brings you here?</p>
                            </div>
                        </div>
                        <div className="listItem opacity-[0.6] flex items-start gap-[16px] self-stretch">
                            <img src="/FileIcon.svg" alt="" />
                            <div className="textDiv flex flex-col pb-[32px] items-start gap-[2px] flex-1">
                                <h6>Freelancer Type</h6>
                                <p>Are you an individual?</p>
                            </div>
                        </div>
                        <div className="listItem opacity-[0.6]   flex items-start gap-[16px] self-stretch">
                            <img src="/FileIcon.svg" alt="" />
                            <div className="textDiv flex flex-col pb-[32px] items-start gap-[2px] flex-1">
                                <h6>Add your details</h6>
                                <p>Create your [user type] account</p>
                            </div>
                        </div>
                        <div className="listItem flex items-start gap-[16px] self-stretch">
                            <img src="/CodeIcon.svg" alt="" />
                            <div className="textDiv flex flex-col pb-[32px] items-start gap-[2px] flex-1">
                                <h6>Confirm you password</h6>
                                <p>Secure your account</p>
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


        <section className='signupSectionTwo flex min-w-[400px] flex-col items-center justify-center flex-1 self-stretch'>
            <div className="ContainerSectionTwo flex p-[32px] flex-col items-center gap-[32px] self-stretch">
               <div className="passwordContainer flex px-[32px] py-0 gap-[80px] flex-col items-center self-stretch">
                <div className="passwordContainerContent flex w-[464px] flex-col items-start gap-[32px]">
                    <div className="passHeadings flex flex-col items-start gap-[12px] self-stretch">
                        <h2>Choose a password</h2>
                        <p>Must be at least 8 characters.</p>
                    </div>
                    <div className='labelInput w-[525px] flex flex-col gap-[5px]'>
                                <label htmlFor="Password">Password*</label>
                                <input type="text" placeholder='Choose a password' className='FormInput'/>
                                </div>
                                <div className='labelInput w-[525px] flex flex-col gap-[5px]'>
                                <label htmlFor="Password">Password*</label>
                                <input type="text" placeholder='Confirm password' className='FormInput'/>
                                </div>

                                <Link href="/maindashboard" className='GreenBtn'>
                   <span>Continue</span></Link>
                </div>
               </div>
                

                
            </div>

        </section>
    </div>
  )
}


