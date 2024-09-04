import React, { Children } from 'react'
import Image from 'next/image'
const Rolecard = () => {
  return (
    <div className='border-2 border-black rounded-lg w-[600px]'>
      <div className='flex gap-5 py-2'>
        <div className='px-2 py-2'><Image src="/image.png" alt="hotspot" height={50} width={50}/></div>
        <div className='flex flex-col gap-2'>
            <div className='font-semibold text-2xl '>Visual Designer</div>
            <div className='flex gap-2'>
                <Tag text={"3D Design"}/>
                <Tag text={"3D Design"}/>
                <Tag text={"3D Design"}/>
                <Tag text={"3D Design"}/>
                
            </div>
        </div>
      </div>
      <div>
        
      </div>
      
    </div>
  )
}

export default Rolecard



const Tag = ({text}:any) => {
  return (
    <div className='rounded-full bg-cyan-100 text-blue-500 px-2 font-semibold py-1 text-sm'>{text}</div>
  )
}


