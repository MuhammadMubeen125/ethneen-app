import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoEthneen from '../../../public/images/LogoEthneen.svg'

export const PageOne = () => {
  return (
    <div className='signupMain flex h-[650px] items-center flex-shrink-0 self-stretch'>
        <section className='signUpSectionOne flex h-[100vh] max-w-[440px] flex-col justify-between items-start flex-1 self-stretch'>
            <div className="ConainerSignup flex pt-8 pb-0 px-8 flex-col items-start gap-[80px] self-stretch">
            <Image src={LogoEthneen} alt="" className='w-[142px] h-[32px]'/>
            <div className="subContainer flex pr-[32px] flex-col items-start gap-[32px] self-stretch">
                    <div className="subContainerContent flex flex-col items-start self-stretch">
                        <div className="listItem flex items-start gap-[16px] self-stretch">
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
                        <div className="listItem opacity-[0.6] flex items-start gap-[16px] self-stretch">
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

        <section className='signupSectionTwo flex min-w-[400px] p-[160px] flex-col items-center flex-1 self-stretch'>
            <div className="ContainerSectionTwo flex p-[32px] flex-col items-center gap-[32px] self-stretch">
                <div className="SectionTwoContent flex flex-col items-center gap-[32px]">
                    <img src="/UserCheckIcon.svg" alt="" />
                    <h1>What brings you to Ethneen?</h1>
                </div>
                <div className="UserSelectDiv flex flex-col items-center gap-[24px]">
                    <div className="userRow flex w-full items-start gap-[12px]">
                        <div className="UserCard w-full flex p-[16px] items-start gap-[4px] flex-1">
                            <div className="UserCardContent w-full flex flex-col justify-center items-center gap-[12px] flex-1">
                                <img src="/laptopIcon.svg" alt="" />
                                <p>Join as a <span className='text-[#008000]'>Freelancer</span></p>
                            </div>
                        </div>
                        <div className="UserCard w-full flex p-[16px] items-start gap-[4px] flex-1">
                            <div className="UserCardContent w-full flex flex-col justify-center items-center gap-[12px] flex-1">
                                <img src="/laptopIcon.svg" alt="" />
                                <p>Join as a <span className='text-[#008000]'>Freelancer</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='btnDiv w-[500px]'>
                <Link href="/dashboard" className='GreenBtn'>
                <span>Continue</span></Link>
                </div>
                
            </div>

        </section>
    </div>
  )
}
