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

  
export default function MyForm() {
const CONTRACT = '0x8197Ac59CbC142236bdAb2C91d420A528c592750';
const [eventadminAddr, setEventadminAddr] = useState();
const [regId, setRegId] = useState(null);
const [Id, setId] = useState(null);
const [fee, setFee] = useState(null);
const [numberOfPart, setNumberOfPart] = useState(null);
const [eventUri, setEventUri] = useState("");
const [name, setName] = useState("");
const [symbol, setSymbol] = useState("");
const [poapName, setPoapName] = useState("");
const [poapSymbol, setPoapSymbol] = useState("");

// const { config } = usePrepareContractWrite({
//     address: CONTRACT,
//     abi: ticketAbi,
//     functionName: "createID",
//     args: [regId, eventadminAddr ],
//   });
// const { data: eventData,isLoading:eventIsLoading, write: event } = useContractWrite(config);
  
// const { data: eventWaitData, isLoading: eventWaitIsLoading } =
//     useWaitForTransaction({
//       data: eventData?.hash,

//       onSuccess(data) {
//         console.log("IT IS SUCCESSFUL: ", data);
//       },

//       onError(error) {
//         console.log("Encountered error: ", error);
//       },
//     });

//     useEffect(() => {
//     if (eventData) {
//       console.log(eventData);
//     }
//   }, [eventData]);

// const handleSubmit = (e) => {
//     e.preventDefault();

//     event?.();
//   };







//rrrr

  const { config: config2 } = usePrepareContractWrite({
    address: CONTRACT,
    abi: ticketAbi,
    functionName: "createEvent",
    args: [Id,fee,numberOfPart,eventUri,name,symbol,poapName,poapSymbol ],
  });
const { data: createEventData,isLoading:createEventIsLoading, write: create } = useContractWrite(config2);
  
const { data: createWaitData, isLoading: createWaitIsLoading } =
    useWaitForTransaction({
      data: createEventData?.hash,

      onSuccess(data) {
        console.log("IT IS SUCCESSFUL: ", data);
      },

      onError(error) {
        console.log("Encountered error: ", error);
      },
    });

    useEffect(() => {
    if (createEventData) {
      console.log(createEventData);
    }
  }, [createEventData]);

const handleSubmit2 = (e) => {
    e.preventDefault();

    create?.();
  };

const {
    data: ReturntotalnumberofEvent,
    isLoading: numberOfEventIsLoading,
    isError: numberIsError,
  } = useContractRead({
    address: "0x8197Ac59CbC142236bdAb2C91d420A528c592750",
    abi: ticketAbi,
    functionName: "returnTotalNoOfEvents",
  });





  return (
 <div> 
    <Navbar/> 
    
    <div className="flex flex-row text-[#182507]  mx-6">
      
      {/* <div className="bg-[#8f32e6] mt-10 ml-20 text-center mb-5  rounded-md justify-center w-[500px]"><br/><br/><br/><br/><br/>
       <h1>
      CREATE EVENT ID
    </h1>
    <form onSubmit={handleSubmit}>
     
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
 </div> */}




<div className="bg-[#8f32e6] mt-10 ml-40 text-center rounded-md mb-5 text-[#182507] justify-center w-[500px] h-auto">
      <h1 className="font-bold text-center my-3 justify-center ">
      CREATE EVENT
    </h1>
    <form onSubmit={handleSubmit2}>
     
        <label>
        Registeration Id: <br/>
        <input type="text" placeholder="Id"  onChange={(e) => setId(e.target.value)}/>
      </label>
      <br/><br/>
      <label>
        Number of Participant:<br/>
         <input type="number" placeholder="N0 of participant"  onChange={(e) => setNumberOfPart(e.target.value)}/>
      </label>
     
     <br/><br/>
        <label>
        Event Fee:<br/>
         <input type="number" placeholder="Price"  onChange={(e) => setFee(e.target.value)}/>
      </label>
      
     <br/><br/>
        <label>
        Event Uri:<br/>
         <input type="text" placeholder="event uri"  onChange={(e) => setEventUri(e.target.value)}/>
      </label>
      <br/><br/>
      <label>
        Name:<br/>
         <input type="text" placeholder="name"  onChange={(e) => setName(e.target.value)}/>
      </label>
      <br/><br/>
      <label>
        symbol:<br/>
         <input type="text" placeholder="sympol"  onChange={(e) => setSymbol(e.target.value)}/>
      </label>
      <br/><br/>
      <label>
        poap Name:<br/>
         <input type="text" placeholder="poap name"  onChange={(e) => setPoapName(e.target.value)}/>
      </label>
      <br/><br/>
      <label>
        poap symbol:<br/>
         <input type="text" placeholder="poap symbol" onChange={(e) => setPoapSymbol(e.target.value)}/>
      </label>
      <br/><br/>

      <button className="bg-[#370368] rounded-md p-2 hover:bg-light-blue hover:text-white border-radius mb-5" type="submit">{createEventIsLoading || createWaitIsLoading
          ? "Creating event..."
          : "Create Event"}</button>
    </form>
    </div>
    </div>
        </div>
  );
}
