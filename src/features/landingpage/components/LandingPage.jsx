import React from 'react';
import Image from 'next/image';
import FeauturedOffer from './FeauturedOffer';
//import { Outlet, Link } from "react-router-dom";
import Link from 'next/link'


const LandingPage = () => {
  return (
    <div className='flex flex-col bg-[#EFF2F9]'>
        <div className="bg-cover bg-center landing-top-img flex flex-col bg-[#000000]">
        
        <div className="text-center z-[1] m-auto flex flex-col mt-64">
          <h1 className="text-white text-[58px] font-bold">Welcome to iTicket</h1>
          <p className="text-white text-[24px]">Future of Event Registration platform</p>

          <div className=' flex mx-auto gap-[20px] mt-[20px]'>
           <Link href="/createid">
             <button className='px-2 py-1 text-[16px] hover:bg-[#052C5B]  hover:text-white rounded bg-white'>
              CREATE EVENT
            </button>
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
