'use client';   
import  { useState } from 'react';
import Image from 'next/image';
import { MdOutlineScreenShare } from "react-icons/md";
const Navbar = () => {
  return (
    <div className='flex items-center gap-10  p-2 z-10'>
      <div className='px-14 py-2 mr-40'>
          <a href='/'>
          <Image src='/JOB (2).png'  alt='logo' width={120} height={120} />
          </a>
          
      </div>
      <div className='flex ml-[500px] gap-20 items-center'>
        <FlyoutLink FlyoutContent={productContent} contentType="Products" >
          Products    
        </FlyoutLink>
        <FlyoutLink FlyoutContent={productContent} contentType="Solutions">
          Solutions    
        </FlyoutLink>
        <FlyoutLink noFlyout >
          About    
        </FlyoutLink>
        
      </div>

    </div>
    
  )
};

const FlyoutLink = ({children  , href , FlyoutContent, noFlyout, contentType}) =>{
    const [isOpen, setIsOpen] = useState(false);

    const showFlyout = !noFlyout && isOpen && FlyoutContent;

    return (
        <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)} 
        className='relative h-fit w-fit '>
            <a href={href} className={`${isOpen ? 'text-[#ffd105] cursor-pointer' : 'text-black'} relative font-work`}>{children}
                <span 
                style={{
                    transform: isOpen ? 'scaleX(1)' : 'scaleX(0)'
                }}
                className='absolute -bottom-2 -left-2 -right-2 bg-[#ffd105] h-1 rounded-full origin-left transition-transform
                duration-300 ease-out'/>
            </a>
            { showFlyout && <div className='absolute left-1/2 top-12 '>
                <div className='bg-transparent absolute -left-1/2 -top-6 right-[8rem] h-6 z-10' />
            <FlyoutContent contentType={contentType}/></div>}
        </div>
    )
};


const productContent = ({contentType}) => {
  if(contentType=="Products")
    return (
        <div className='flex font-bold   font-sans h-[17rem] w-[30rem] bg-white p-6 shadow-xl -translate-x-1/2 '>
          <div className='flex-1  p-2 border-yellow-200 border-r-2'>
            <h1 className='font-sans hover:cursor-pointer hover:text-[#ffd105]'>HIRE SUITE</h1>
            <div className='flex mt-4 '>    
              <div >
                <Image src="/Jwmeet.png" alt='jobwemeet' width={100} height={100}/>
              </div>
              <div>
                <h1 className='hover:cursor-pointer hover:text-[#ffd105]'>Job we meet</h1>
                <p className='font-normal text-sm '>Schedule and conduct interviews!</p>
              </div>
            </div>
            <div className='flex mt-4 '>    
              <div className='flex gap-2 p-2'>
                <Image src="/Codewemet.png" alt='Codewemet' width={2} height={2}/>
              </div>
              <div>
                <h1 className='hover:cursor-pointer hover:text-[#ffd105]'>Pre-screen</h1>
                <p className='font-normal text-sm '>Conduct coding tests</p>
              </div>
            </div>
            


          </div>
          <div className='flex-1 p-2 pl-10'>
            <h1 className='font-sans hover:cursor-pointer hover:text-[#ffd105]'>DEVELOP SUITE</h1>
            <div className='flex mt-4 '>    
              <div className='flex gap-2 p-2'>
                <Image src="/Codewemet.png" alt='Codewemet' width={2} height={2}/>
              </div>
              <div>
                <h1 className='hover:cursor-pointer hover:text-[#ffd105]'>Code we met</h1>
                <p className='font-normal text-sm '>Practice DSA</p>
              </div>
            </div>
            
          </div>
        </div>
    )
  else
    return(
      <div className='flex font-bold   font-sans h-[17rem] w-[30rem] bg-white p-6 shadow-xl -translate-x-1/2 '>
        Solutions
      </div>
    )
}
// const ContentMaker=({contentType})=>{
//   return (
//             <div className='flex mt-4 '>    
//               <div className='flex gap-2 p-2'>
//                 <MdOutlineScreenShare style={{ fontSize:'25px' }}/>
//               </div>
//               <div>
//                 <h1 className='hover:cursor-pointer hover:text-[#ffd105]'>Pre-screen</h1>
//                 <p className='font-normal text-sm '>Hire the top   talent</p>
//               </div>
//             </div>
//   );
// }

export default Navbar
