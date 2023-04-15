import React, { useEffect, useState } from 'react';
import { useContractRead } from 'wagmi'
import ticketAbi from "../../../utils/ticketFactoryAbi.json";
import Display from './childContracts';
// import iticketAbi from "../utils/ticketAbi.json";



const Fetchi = () => {
const CONTRACT = '0x8197Ac59CbC142236bdAb2C91d420A528c592750';
const [detail, setDetails] = useState([]);

    const { data, isError, isLoading } = useContractRead({
        address: CONTRACT,
        abi: ticketAbi,
        functionName: 'showTotalEventAddresses',
        
    });

    
    useEffect(() => {
        setDetails(data);
        console.log(data);
    },[data])

    return(
        <div>
            {
            data.map((item) => {
                <div className='text-black'>
                <Display contractAddress = {'0x8858a3302910D7017fF92080a93B11AC1e6D2169'}/>
                <p>{item}</p>
                </div>
            })
        } 
        </div>
        
    )

}

export default Fetchi