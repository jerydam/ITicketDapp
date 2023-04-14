import React from 'react';
import Image from 'next/image';
import FeauturedOffer from './FeauturedOffer';
//import { Outlet, Link } from "react-router-dom";
import Link from 'next/link'
import Navbar from '../../../components/Navbar';
// import bgImage from './metaverse.jpg';
import Fetch from '../../../pages/eventDetails';


const LandingPage = () => {
  return (
        
    <div class='flex flex-col bg-[#EFF2F9]'>
  <div class="bg-cover bg-center landing-top-img text-white flex flex-col bg-[#000000]" >
  
 <div class='flex flex-col lg:flex-row lg:justify-between lg:items-center w-fullh justify-center px-4'>
  <Navbar/>
</div>

  
   <div className="text-center z-[1] m-auto flex flex-col justify-center items-center mt-[10vh]">
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">Re-Imagine The Future of Events</h1>
      <p className="text-white text-xl md:text-2xl lg:text-3xl mt-3">innovative NEW ways to connect with your audience</p>

      <div className='flex flex-col md:flex-row mt-10'>
        <Link href="/createid">
          <button className="bg-[#01022e] border border-[#a5fafd] mt-4 md:mt-8 lg:mt-10 rounded-md py-3 px-6 text-lg lg:text-xl hover:bg-[#052C5B] hover:text-white" type="submit">Create Event</button>
        </Link>
      </div>
    </div>
  </div>

 <div className='card rounded-lg bg-[#ffffff] shadow-inner w-11/12 m-auto flex flex-col mb-14 min-h-[440px] md:-mt-36 lg:-mt-28 relative'>
  <Fetch/>
</div>

</div>
  );
};

export default LandingPage;
