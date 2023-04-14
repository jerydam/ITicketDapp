import React, { useEffect, useState } from 'react';
import { useContractRead } from 'wagmi'
import ticketAbi from "../utils/ticketFactoryAbi.json";
// import iticketAbi from "../utils/ticketAbi.json";



export default function Fetch() {
const CONTRACT = '0x8197Ac59CbC142236bdAb2C91d420A528c592750';
const [detail, setDetails] = useState([]);

    const { data, isError, isLoading } = useContractRead({
        address: CONTRACT,
        abi: ticketAbi,
        functionName: 'showTotalEventAddresses',
        onSuccess(data, error){
            setDetails(data);
            console.log(data);
        }

    });

    // useEffect(() => {

    // }, []);

    // return(

    //     {
    //         detail?.map((e, i) => {

    //         })
    //     }
    // )

}
