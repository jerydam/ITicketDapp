import Navbar from "../components/Navbar";
import { useParams } from "next/navigation";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import {
  erc20ABI,
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import ticketAbi from "../utils/ticketFactoryAbi.json";
import childTicket from "../utils/iticketAbi.json";

const EventDeets = () => {
  const eventAddress = useParams();
  // const { address } = useAccount();

  const {
    data: evtDetails,
    isLoading: evtDetailIsLoading,
    isError: evtIsError,
  } = useContractRead({
    address: eventAddress,
    abi: childTicket,
    functionName: "eventDetails",
  });

  useEffect(() => {
    if (evtDetails) {
      console.log(evtDetails);
    }
  }, [evtDetails]);

  const {
    data: regData,
    isLoading: regIsLoading,
    write: register,
  } = useContractWrite({
    address: eventAddress,
    abi: childTicket,
    functionName: "register",
  });

  const { data: regWaitData, isLoading: regIsLoadingWaitData } =
    useWaitForTransaction({
      hash: regData?.hash,

      onSuccess(data) {
        console.log(data);
        console.log("registration SUCCESSFUL");
        alert("SUCCESSFULLY REGISTERED");
        // register?.();
      },
      onError(error) {
        console.log(error);
      },
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    register?.();
  };

  return (
    <div>
      <Navbar />
      <h1>Event Details are : {evtDetails}</h1>

      <form onSubmit={handleSubmit}>
        <button
          className="bg-[green] border border-blue-300 text-white rounded-md p-2 hover:bg-light-blue hover:text-white border-radius mb-5"
          type="submit"
        >
          {regIsLoading || regIsLoadingWaitData
            ? "Registering For Event..."
            : "Register For this Event"}
        </button>
      </form>
    </div>
  );
};

export default EventDeets;
