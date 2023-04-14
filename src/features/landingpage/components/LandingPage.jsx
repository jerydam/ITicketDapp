import React from 'react';
import Image from 'next/image';
import FeauturedOffer from './FeauturedOffer';
//import { Outlet, Link } from "react-router-dom";
import Link from 'next/link'
import Connect from '../../profile/component/components/Connect';

const LandingPage = () => {
  return (

          
        
    <div className='flex flex-col bg-[#EFF2F9]'>
        
        <div className="bg-cover bg-center landing-top-img flex flex-col  bg-[#000000]">
      <div className='text-white flex flex-row '>
        <Logo/>
        <button className='ml-[200px]'>About</button>
        <button className='ml-[200px]'>Documentation</button>
        <button className='mr-[150px] ml-[200px]'>Developer</button>
        <Connect/>
      </div>
        
        <div className="text-center z-[1] m-auto flex flex-col mt-64">
          <h1 className="text-white text-[58px] font-bold">Create and Register Events with iTicket</h1>
          <p className="text-white text-[24px]">Revolutionize the Way You Host and Attend Events</p>

          <div className=' flex mx-auto gap-[20px] mt-[20px]'>
           <Link href="/createid">
             
                <button className=" bg-light-blue mt-20 rounded-md p-2 hover:bg-[#052C5B] hover:text-white border-radius mb-5" type="submit">Create Event</button>
              
           </Link>
            

        </div>
      </div>
      </div>
      

      <div className=' card rounded-lg bg-[#ffffff] shadow-inner w-11/12 m-auto flex flex-col mb-14 min-h-[440px] -mt-9 relative'>
 
<FeauturedOffer/>
 
</div>

    </div>
  );
};

export default LandingPage;
