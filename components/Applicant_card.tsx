import React from 'react'
import Image from 'next/image'
const Applicant_card = () => {
  return (
    <div className='flex border-2 border-black rounded-lg gap-10 mx-2 px-5 py-3 w-[600px]'>
      <div>
          <Image src="/bnc.jpg" alt="image" width={100} height={10} className='rounded-full'/>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='text-xl font-semibold'>Senior Product Manager</div>
        <div className='text-lg'>DR. BNC</div>
        <div className='text-indigo-600 hover:font-bold hover:cursor-pointer hover:underline'>View Profile</div>
        <div>First time push karrela hai!</div>
      </div>
    </div>
  )
}

export default Applicant_card
