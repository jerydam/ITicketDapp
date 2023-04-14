import React from 'react';
import Navbar from "../components/Navbar"
import {
  erc20ABI,
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useState, useEffect} from "react";
import ticketAbi from "../utils/ticketFactoryAbi.json";

  
export default function MyForm() {
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
 <div> 
    <Navbar/> 
    <div className="flex flex-row text-[#182507]  mx-6">
      
      <div className="bg-[#8f32e6] mt-10 ml-20 text-center mb-5  rounded-md justify-center w-[500px]"><br/><br/><br/><br/><br/>
       <h1>
      CREATE EVENT ID
    </h1>
    <form method="post" onSubmit={handleSubmit}>
     
            <label>
        Registeration Id: <br/>
        <input type="text" placeholder="Id" onChange={(e) => setRegId(e.target.value)}/>
      </label>
      <br/><br/><br/><br/>
      <label>
        Event Admin:<br/>
         <input type="text" placeholder="wallet address" onChange={(e) => setEventadminAddr(e.target.value)}/>
      </label>
      <br/><br/><br/><br/>

       <button className="bg-[#370368] rounded-md p-2 hover:bg-light-blue hover:text-white border-radius mb-5" type="submit">{eventIsLoading || eventWaitIsLoading
          ? "Creating event ID..."
          : "Create ID"}</button>
    </form>
 <br/> <br/> <br/> <br/>
 </div>

<div className="bg-[#8f32e6] mt-10 ml-40 text-center rounded-md mb-5 text-[#182507] justify-center w-[500px] h-auto">
      <h1 className="font-bold text-center my-3 justify-center ">
      CREATE EVENT
    </h1>
    <form method="post" onSubmit={handleSubmit}>
     
        <label>
        Registeration Id: <br/>
        <input type="text" placeholder="Id"/>
      </label>
      <br/><br/>
      <label>
        Number of Participant:<br/>
         <input type="number" placeholder="N0 of participant"  />
      </label>
     <br/><br/>
        <label>
      Event Start Time:<br/>
       <input type="number" placeholder="reg. start time"/>
      </label>
      <br/><br/>
      <label>
        Registeration Start time:<br/>
         <input type="number" placeholder="reg. start time"  />
      </label>
     <br/><br/>
        <label>
        Registeration End time::<br/> 
        <input type="number" placeholder="reg. end time"/>

      </label>
      <br/><br/>
      <label>
        Event End Time:<br/>
         <input type="text" placeholder="event end time"  />
      </label>
     <br/><br/>
        <label>
        Event Fee:<br/>
         <input type="number" placeholder="Price"/>
      </label>
      <br/><br/>
      <label>
        Event date:<br/> 
        <input type="number" placeholder="event date"  />
      </label>
     <br/><br/>
        <label>
        Event Uri:<br/>
         <input type="text" placeholder="event uri"/>
      </label>
      <br/><br/>
         

      <button className="bg-[#370368] rounded-md p-2 hover:bg-light-blue hover:text-white border-radius mb-5" type="submit">Submit form</button>
    </form>
    </div>
    </div>
        </div>
  );
}
