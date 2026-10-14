import React from 'react'
import Paragraph from './common/Paragraph'

const HeroSection = () => {
  return (
    <div className='bg-[#12123A] pb-5 '>
      <h1 className='text-2xl text-white  pb-4'>Ferrominera Orinoco</h1>
      <div className='flex justify-left items-center gap-4 max-w-[724px] flex-wrap lg:flex-nowrap '>
        <div className='max-w-[236px] py-[21px] pr-[29.7px] pl-[14px] bg-[#151940] rounded-[10px]'>
            <h1 className='text-2xl font-medium leading-[113%] text-[#62C9CC]'>Working Capital Loan</h1>
            <p className='text-white opacity-[70%] font-normal text-sm leading-[150%]'>Type of instrument</p>
        </div>
        <div className='min-w-[236px] py-[34.5px]  pl-[26px] bg-[#151940] rounded-[10px'>
            <h1 className='text-2xl font-medium leading-[113%] text-[#62C9CC]'>16.00%</h1>
            <p className='text-white opacity-[70%] font-normal text-sm leading-[150%]'>Interest rate</p>
        </div>
        <div className='min-w-[236px] py-[33.5px] pr-[29.7px] pl-[14px] bg-[#151940] rounded-[10px]'>
            <h1 className='text-2xl font-medium leading-[113%] text-[#62C9CC]'>$ 5,565,099.00</h1>
            {/* <p className='text-white opacity-[70%] font-normal text-sm leading-[150%]'>Total amount</p> */}
            <Paragraph className={'text-white/70!'} text={'Total amount'}/>
        </div>
      </div>




     
    </div>

  )
}

export default HeroSection
