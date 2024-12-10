import React from 'react';
import Image from 'next/image'
import ColorStar from '../../../public/images/coloredStarIcon.svg'
import arrowBtn from '../../../public/images/arrowBtn.svg'

const PopupContent = () => {
  return (
    <div className='popupMain'>
      <div className='popupDiv pb-[20px]'>
        <h2 >Write with Noor</h2>
        <p>What would you like Noor to write about?</p>
      </div>
      <div className="questionDiv flex pb-[24px] gap-[12px] items-start self-stretch">
      <Image src={ColorStar} alt="" className='w-[40px] h-[40px]'/>
      <div className='Qpop w-full flex p-[10px_14px] items-center gap-[8px] self-stretch'>
        <span>Hello! How can I assist you today?</span>
      </div>
      </div>
      <div className="searchDiv flex flex-col  items-start gap-[12px] self-stretch">
        <div className="searchInnerDiv flex p-[12px_14px] items-center justify-between self-stretch">
          <input type="text" placeholder='What would you like Noor to write about?' name="" id="" className='w-full'/>
          <Image src={arrowBtn} alt="" className='w-[40px] h-[40px]'/>

        </div>
      </div>
    </div>
  );
};

export default PopupContent;
