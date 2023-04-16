import React from 'react';
import Navbar from "../components/Navbar"
import {
  erc20ABI,
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useState, useEffect} from "react";
import ticketAbi from "../utils/ticketFactoryAbi.json";


  
export default function Admin() {
const CONTRACT = '0x8197Ac59CbC142236bdAb2C91d420A528c592750';
const [eventadminAddr, setEventadminAddr] = useState();
const [regId, setRegId] = useState(null);

const { config } = usePrepareContractWrite({
    address: CONTRACT,
    abi: ticketAbi,
    functionName: "createID",
    args: [regId, eventadminAddr ],
  });

const { data: eventData,isLoading:eventIsLoading, write: event } = useContractWrite(config);
  
const { data: eventWaitData, isLoading: eventWaitIsLoading } =
    useWaitForTransaction({
      data: eventData?.hash,

      onSuccess(data) {
        console.log("IT IS SUCCESSFUL: ", data);
      },

      onError(error) {
        console.log("Encountered error: ", error);
      },
    });

    useEffect(() => {
    if (eventData) {
      console.log(eventData);
    }
  }, [eventData]);

const handleSubmit = (e) => {
    e.preventDefault();

    event?.();
  };


  return (
 <div className='bg-[#06001d]'> 
    <Navbar/> 
    
    <div className="flex flex-row text-[#182507]   mx-6">
      
      <div className="bg-[#0a0213] border border-white mt-10 ml-20 text-center mb-5  rounded-md justify-center w-[500px]"><br/><br/><br/><br/><br/>
       <h1 className='text-white font-semibold p-2 text-xl'>
      CREATE EVENT ID
    </h1>
    <form onSubmit={handleSubmit}>
     
      <label className='text-white text-xl'>
        Reg. ID: <br/>
      </label>
        <input type="text" placeholder="enter unique ID" onChange={(e) => setRegId(e.target.value)} className='py-3 px-1 rounded-lg'/>
      <br/><br/><br/><br/>
      <label className='text-white text-xl'>
        Event Admin:<br/>
      </label>
         <input type="text" placeholder="wallet address" onChange={(e) => setEventadminAddr(e.target.value)} className='py-3 px-1 rounded-lg'/>
      <br/><br/><br/><br/>

       <button className="bg-[#ebdcfa] text-[#19072b] text-lg font-bold rounded-md py-3 px-8 hover:bg-[#8f8499] hover:text-white border-radius mb-5" type="submit">{eventIsLoading || eventWaitIsLoading
          ? "Creating event ID..."
          : "Create ID"}</button>
    </form>
 <br/> <br/> <br/> <br/>
 </div>
  </div>
  </div>
  
  );
}

