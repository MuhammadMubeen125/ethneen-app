import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoEthneen from '../../../public/images/LogoEthneen.svg'

export const PageThree = () => {
  return (
    <div className='signupMain flex h-[650px] items-center flex-shrink-0 self-stretch'>
        <section className='signUpSectionOne flex h-[100vh] max-w-[440px] flex-col justify-between items-start flex-1 self-stretch'>
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
                        <div className="listItem  flex items-start gap-[16px] self-stretch">
                            <img src="/FileIcon.svg" alt="" />
                            <div className="textDiv flex flex-col pb-[32px] items-start gap-[2px] flex-1">
                                <h6>Add your details</h6>
                                <p>Create your [user type] account</p>
                            </div>
                        </div>
                        <div className="listItem opacity-[0.6] flex items-start gap-[16px] self-stretch">
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


        <section className='signupSectionTwo flex min-w-[400px] flex-col items-center flex-1 self-stretch'>
            <div className="ContainerSectionTwo flex p-[32px] flex-col items-center gap-[32px] self-stretch">
                <div className="FormContent flex flex-col items-start gap-[32px]">
                    <h1>Add your details</h1>
                    <div className="formContentDivTwo flex flex-col items-center pb-[24px]">
                        <div className="formDiv flex w-[576px] flex-col items-start pb-[32px] gap-[20px]">
                            <div className="formRowDiv flex items-start gap-[20px] self-stretch">
                                <div className='labelInput w-[250px] flex flex-col gap-[5px]'>
                                <label htmlFor="First name">First name*</label>
                                <input type="text" placeholder='First Name' className='FormInput'/>
                                </div>
                                <div className='labelInput w-[250px] flex flex-col gap-[5px]'>
                                <label htmlFor="Last name">Last name*</label>
                                <input type="text" placeholder='Last Name' className='FormInput'/>
                                </div>
                            </div>
                            <div className='labelInput w-[525px] flex flex-col gap-[5px]'>
                                <label htmlFor="Username">Username*</label>
                                <input type="text" placeholder='Username' className='FormInput'/>
                                </div>
                                <div className='labelInput w-[525px] flex flex-col gap-[5px]'>
                                <label htmlFor="Company name">Company name (if any)</label>
                                <input type="text" placeholder='Company name' className='FormInput'/>
                                </div>
                                <div className='labelInput w-[525px] flex flex-col gap-[5px]'>
                                <label htmlFor="Email address">Email address*</label>
                                <input type="text" placeholder='Email address' className='FormInput'/>
                                </div>
                                <div className='labelInput w-[525px] flex flex-col gap-[5px]'>
                                <label htmlFor="Phone number">Phone number*</label>
                                <input type="text" placeholder='Phone number' className='FormInput'/>
                                </div>

                                <div className='flex flex-row gap-[5px] items-center'>
                            <input type="checkbox" name="" id="" />
                        <p>Accept all <span className='text-[#008000]'>Terms and Conditions</span> & <span className='text-[#008000]'>Privacy Policy</span></p>
                        </div>
                        </div>
                        
                        

                        <Link href="/passworddetails" className='GreenBtn'>
                   <span>Continue</span></Link>
                    </div>
                </div>
                

                
            </div>

        </section>
    </div>
  )
}


