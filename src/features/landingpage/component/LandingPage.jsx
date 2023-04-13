import React from 'react';
import Image from 'next/image';
import FeauturedOffer from './FeauturedOffer';
//import { Outlet, Link } from "react-router-dom";
import Link from 'next/link'
import Connect from '../../../components/Connect';;

const LandingPage = () => {
  return (

          
        
    <div class='flex flex-col bg-[#EFF2F9]'>
  <div class="bg-cover bg-center landing-top-img flex flex-col bg-[#000000]">
    <div class='flex flex-col md:flex-row md:justify-between md:items-center'>
  
  <div class='flex mt-4 md:mt-0'>
    <button class='ml-0 md:ml-10 font-semibold'>About</button>
    <button class='ml-0 md:ml-10 font-semibold'>Documentation</button>
    <button class='ml-0 md:ml-10 mr-0 md:mr-20 font-semibold'>Developer</button>
    <Connect/>
  </div>
</div>


    <div className="text-center z-[1] m-auto flex flex-col mt-[10vh]">
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">Create and Register Events with iTicket</h1>
      <p className="text-white text-xl md:text-2xl lg:text-3xl mt-3">Revolutionize the Way You Host and Attend Events</p>

      <div className='flex flex-col md:flex-row mt-10'>
        <Link href="/createid">
          <button className="bg-light-blue mt-4 md:mt-8 lg:mt-10 rounded-md py-3 px-6 text-lg lg:text-xl hover:bg-[#052C5B] hover:text-white" type="submit">Create Event</button>
        </Link>
      </div>
    </div>
  </div>

 <div className='card rounded-lg bg-[#ffffff] shadow-inner w-11/12 m-auto flex flex-col mb-14 min-h-[440px] md:-mt-36 lg:-mt-28 relative'>
  <FeauturedOffer/>
</div>

</div>
  );
};

export default LandingPage;
