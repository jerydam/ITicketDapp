import React from "react";
import Navbar from "../components/Navbar";
import {
  erc20ABI,
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useState, useEffect } from "react";
import ticketAbi from "../utils/ticketFactoryAbi.json";
import childTicket from "../utils/iticketAbi.json";

export default function MyForm() {
  const CONTRACT = "0x8197Ac59CbC142236bdAb2C91d420A528c592750";
  const CHILDCONTRACT = "0xfc1382A029A214e720B534A68A30F1d2f33280Bd";
  const [eventadminAddr, setEventadminAddr] = useState();
  const [regId, setRegId] = useState(null);
  const [Id, setId] = useState(null);
  const [fee, setFee] = useState(null);
  const [numberOfPart, setNumberOfPart] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
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

  const { config: config2 } = usePrepareContractWrite({
    address: CONTRACT,
    abi: ticketAbi,
    functionName: "createEvent",
    args: [Id, fee, numberOfPart, eventUri, name, symbol, poapName, poapSymbol],
  });
  const {
    data: createEventData,
    isLoading: createEventIsLoading,
    write: create,
  } = useContractWrite(config2);

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

  useEffect(() => {
    const evt = toString(ReturntotalnumberofEvent);
    if (evt) {
      console.log(evt);
    }
  }, [ReturntotalnumberofEvent]);

  //===================================================
  //==================================================
  //===================================================

  const { config: config3 } = usePrepareContractWrite({
    address: CHILDCONTRACT,
    abi: childTicket,
    functionName: "startRegistration",
    args: [startTime, endTime],
  });
  const {
    data: startEndRegistration,
    isLoading: isLoadingStartEndRegistration,
    write: startReg,
  } = useContractWrite(config3);

  const { data: startWaitData, isLoading: startWaitIsLoading } =
    useWaitForTransaction({
      data: startEndRegistration?.hash,

      onSuccess(data) {
        console.log("IT IS SUCCESSFUL: ", data);
      },

      onError(error) {
        console.log("Encountered error: ", error);
      },
    });

  useEffect(() => {
    if (startEndRegistration) {
      console.log(startEndRegistration);
    }
  }, [startEndRegistration]);

  const handleSubmit3 = (e) => {
    e.preventDefault();

    startReg?.();
  };

  //=====================================================
  ///=====================================================

  const { config: config4 } = usePrepareContractWrite({
    address: CHILDCONTRACT,
    abi: childTicket,
    functionName: "endRegistration",
  });
  const {
    data: EndRegistration,
    isLoading: isLoadingEndRegistration,
    write: endReg,
  } = useContractWrite(config4);

  const { data: endWaitData, isLoading: endWaitIsLoading } =
    useWaitForTransaction({
      data: EndRegistration?.hash,

      onSuccess(data) {
        console.log("IT IS SUCCESSFUL: ", data);
      },

      onError(error) {
        console.log("Encountered error: ", error);
      },
    });

  useEffect(() => {
    if (EndRegistration) {
      console.log(EndRegistration);
    }
  }, [EndRegistration]);

  const handleSubmit4 = (e) => {
    e.preventDefault();

    endReg?.();
  };

  const { data: totalNoOfEvents, isLoading: totalNoOfEventsiSlOADING } =
    useContractRead({
      address: CONTRACT,
      abi: ticketAbi,
      functionName: "returnTotalNoOfEvents",
    });

  console.log("My balance is: ", String(totalNoOfEvents));

  return (
    <div>
      <Navbar />
      <h1 className="font-bold font-weight:900 text-center my-3 justify-center ">
        Total Number Of Events created: {String(totalNoOfEvents)}
      </h1>
      <div className="flex flex-wrap">
        <div></div>
        <div className="flex flex-wrap text-[#182507]  mx-2">
          <div className="bg-[#8f32e6] mt-10 ml-40 text-center rounded-md mb-5 text-[#182507] justify-center w-[500px] h-auto">
            <h1 className="text-white font-bold text-center my-3 justify-center ">
              CREATE EVENT
            </h1>
            <form onSubmit={handleSubmit2}>
              <label>
                Registeration Id: <br />
                <input
                  className="p-2 border border-orange-400"
                  type="text"
                  placeholder="Id"
                  onChange={(e) => setId(e.target.value)}
                />
              </label>

              <br />
              <br />
              <label>
                Number of Participant:
                <br />
                <input
                  className="p-2 border border-orange-400"
                  type="number"
                  placeholder="N0 of participant"
                  onChange={(e) => setNumberOfPart(e.target.value)}
                />
              </label>

              <br />
              <br />
              <label>
                Event Fee:
                <br />
                <input
                  className="p-2 border border-orange-400"
                  type="number"
                  placeholder="Price"
                  onChange={(e) => setFee(e.target.value)}
                />
              </label>

              <br />
              <br />
              <label>
                Event Uri:
                <br />
                <input
                  className="p-2 border border-orange-400"
                  type="text"
                  placeholder="event uri"
                  onChange={(e) => setEventUri(e.target.value)}
                />
              </label>
              <br />
              <br />

              <label>
                Name:
                <br />
                <input
                  className="p-2 border border-orange-400"
                  type="text"
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <br />
              <br />
              <label>
                symbol:
                <br />
                <input
                  className="p-2 border border-orange-400"
                  type="text"
                  placeholder="sympol"
                  onChange={(e) => setSymbol(e.target.value)}
                />
              </label>
              <br />
              <br />
              <label>
                poap Name:
                <br />
                <input
                  className="p-2 border border-orange-400"
                  type="text"
                  placeholder="poap name"
                  onChange={(e) => setPoapName(e.target.value)}
                />
              </label>
              <br />
              <br />
              <label>
                poap symbol:
                <br />
                <input
                  className="p-2 border border-orange-400"
                  type="text"
                  placeholder="poap symbol"
                  onChange={(e) => setPoapSymbol(e.target.value)}
                />
              </label>
              <br />
              <br />

              <button
                className="bg-[green] border border-blue-300 text-white rounded-md p-2 hover:bg-light-blue hover:text-white border-radius mb-5"
                type="submit"
              >
                {createEventIsLoading || createWaitIsLoading
                  ? "Creating event..."
                  : "Create Event"}
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-row text-[#182507]  mx-2">
          <div className="bg-[#8f32e6] mt-10 ml-40 text-center rounded-md mb-5 text-[#182507] justify-center w-[500px] h-auto">
            <h1 className="text-white font-bold text-center my-3 justify-center ">
              Open Registration
            </h1>

            <form onSubmit={handleSubmit3}>
              <label>
                Event-Start-time: <br />
                <input
                  className="p-2 border border-orange-400"
                  type="time"
                  placeholder="Enter time the event commences (HH:mm:ss)"
                  onChange={(e) => {
                    const timeString = e.target.value;
                    const date = new Date(`1970-01-01T${timeString}:00Z`);
                    const unixTimestamp = Math.floor(date.getTime() / 1000);
                    console.log(unixTimestamp);
                    setStartTime(unixTimestamp);
                  }}
                />
              </label>

              <br />
              <br />
              <label>
                <p>Event-End-time:</p>
                <input
                  className="p-2 border border-orange-400"
                  type="time"
                  placeholder="Enter time the event ends (HH:mm:ss)"
                  onChange={(e) => {
                    const timeString = e.target.value;
                    const date = new Date(`1970-01-01T${timeString}:00Z`);
                    const unixTimestamp = Math.floor(date.getTime() / 1000);
                    console.log(unixTimestamp);
                    setEndTime(unixTimestamp);
                  }}
                />
              </label>

              <br />
              <br />

              <button
                className="bg-[green] border border-blue-300 text-white rounded-md p-2 hover:bg-light-blue hover:text-white border-radius mb-5"
                type="submit"
              >
                {isLoadingStartEndRegistration || startWaitIsLoading
                  ? "Opening Registration..."
                  : "Open Registration"}
              </button>
            </form>
          </div>
        </div>
        <hr />

        <div className="flex flex-row text-[#182507]  mx-6">
          <div className="bg-[#8f32e6] mt-10 ml-40 text-center rounded-md mb-5 text-[#182507] justify-center w-[500px] h-auto">
            <h1 className="text-white font-bold text-center my-3 justify-center ">
              End Registration
            </h1>

            <form onSubmit={handleSubmit4}>
              <button
                className="bg-[green] border border-blue-300 text-white rounded-md p-2 hover:bg-light-blue hover:text-white border-radius mb-5"
                type="submit"
              >
                {isLoadingEndRegistration || endWaitIsLoading
                  ? "Ending Registration..."
                  : "End Registration"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
