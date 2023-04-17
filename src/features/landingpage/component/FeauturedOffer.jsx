import Featured from './Featured';
import userDetails from '../../../utils/freelancerDetails';
import ticketAbi from '../../../utils/iticketAbi.json';
import React from "react";
import {
  erc20ABI,
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useState, useEffect } from "react";

const FeaturedOffer = ({contractAddress}) => {
  const [activeEvent, setActiveEvent] = useState({});
    const {
    data: eventDetails,
    isLoading: numberOfEventIsLoading,
    isError: numberIsError,
  } = useContractRead({
    address: contractAddress,
    abi: ticketAbi,
    functionName: "eventDetails",
    onSuccess(data){
      setActiveEvent(data);
      console.log(data)
    }
  });

   return (
    <section className=''>

     <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between transition duration-1000 ease-in-out">
  <Featured
    key={(activeEvent.eventNftId)?.toString()}
    imgSrc={
      "https://ipfs.filebase.io/ipfs/QmdrRngsLRvCBKrWkGsBhvMEhi4UwBbWa24hGAHuANGJ1k"
    }
    avatar={activeEvent.avatar}
    username={("end time " + activeEvent.regEndTime)?.toString()}
    order={("number of participant " + activeEvent.totalParticipants)?.toString()}
    skill={(activeEvent.eventStartTime + "secs")?.toString()}
    price={(activeEvent.eventFee + "eth")?.toString()}
  />
  
  {/* add more Featured components here */}
</div>


    </section>
  )
}

export default FeaturedOffer