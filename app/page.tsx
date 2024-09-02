import React from 'react'
import { CoverDemo } from '@/components/CoverDemo'
import { CardStackDemo } from '@/components/CardStackDemo'
import Marquee from '@/components/magicui/marquee';
import { MarqueeDemo } from '@/components/MarqueeDemo';
const page = () => {
  return (
    <div>
    <div className='flex items-center justify-evenly  h-[32rem]'>
      <div className=''>
        <CoverDemo/>
          <div className='flex gap-10 mt-10'>
           <button className='bg-[#ffd105] hover:bg-yellow-500 rounded-md py-[12px] font-bold text-xl px-[24px]'>For Enterprise</button>
           <button className='border-2 hover:bg-yellow-500 rounded-md border-[#ffd105] font-bold text-xl py-[11px] px-[24px]'>For Individuals</button>  
          </div>
        </div>
      <div className='w-fit h-fit'><CardStackDemo/></div>
    </div>
    <MarqueeDemo/>
    </div>

  );
}

export default page