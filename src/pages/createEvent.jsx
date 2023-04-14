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

    const [regId, setRegId] = useState(null);
    const [fee, setFee] = useState(null);
    const [numberOfPart, setNumberOfPart] = useState(null);
    const [eventUri, setEventUri] = useState("");
    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [poapName, setPoapName] = useState("");
    const [poapSymbol, setPoapSymbol] = useState("");
    const [date, setDate] = useState("");

    const { config: config } = usePrepareContractWrite({
        address: CONTRACT,
        abi: ticketAbi,
        functionName: "createEvent",
        args: [Id,fee,numberOfPart,eventUri,name,symbol,poapName,poapSymbol ],
      });
    const { data: createEventData,isLoading:createEventIsLoading, write: create } = useContractWrite(config);
      
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
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        create?.();
      };

      return(
        <div className='bg-[#06001d]'> 
            <Navbar/> 
                    
        <div className="bg-[#0a0213] mt-10 ml-40 text-center rounded-md mb-5 text-[#182507] text-lg justify-center w-[500px] h-auto">
            <h1 className="font-bold text-center my-3 justify-center ">
            CREATE EVENT
            </h1>
            <form onSubmit={handleSubmit}>
    
            <label className='text-white text-xl'>
                Reg. Id: <br/>
            </label>
                <input type="text" placeholder="Assigned Registration ID"  onChange={(e) => setId(e.target.value)}/>
            <br/><br/>
            <label className='text-white text-xl'>
                Number of Participants:<br/>
            </label>
                <input type="number" placeholder="No of expected participants"  onChange={(e) => setNumberOfPart(e.target.value)}/>
            
            <br/><br/>
            <label className='text-white text-xl'>
                Event Fee:<br/>
            </label>
                <input type="number" placeholder="Enter zero if event is FREE"  onChange={(e) => setFee(e.target.value)}/>
            
            <br/><br/>
            <label className='text-white text-xl'>
                Nft Uri:<br/>
            </label>
                <input type="text" placeholder="Event NFT uri"  onChange={(e) => setEventUri(e.target.value)}/>
            <br/><br/>

            <label className='text-white text-xl'>
                Nft name:<br/>
            </label>
                <input type="text" placeholder="Event NFT title"  onChange={(e) => setName(e.target.value)}/>
            <br/><br/>

            <label className='text-white text-xl'>
                Nft symbol:<br/>
            </label>
                <input type="text" placeholder="Event NFT symbol"  onChange={(e) => setSymbol(e.target.value)}/>
            <br/><br/>

            <label className='text-white text-xl'>
                A-Nft Name:<br/>
            </label>
                <input type="text" placeholder="Attendance NFT name"  onChange={(e) => setPoapName(e.target.value)}/>
            <br/><br/>

            <label className='text-white text-xl'>
                A-Nft symbol:<br/>
            </label>
                <input type="text" placeholder="Attendance NFT symbol" onChange={(e) => setPoapSymbol(e.target.value)}/>
            <br/><br/>

            <label className='text-white text-xl'>
                Event Date:<br/>
            </label>
                <input type="text" placeholder="Date of event" onChange={(e) => setDate(e.target.value)}/>
            <br/><br/>

            <button className="bg-[#ebdcfa] text-[#19072b] text-lg font-bold rounded-md py-3 px-8 hover:bg-[#8f8499] hover:text-white border-radius mb-5" type="submit">{createEventIsLoading || createWaitIsLoading
                ? "Creating event..."
                : "Create Event"}</button>
            </form>
            </div>

        </div>
      )




}
