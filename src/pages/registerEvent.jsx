import React from 'react';
import Navbar from "../components/Navbar"
import { useState, useEffect} from "react";


export default Register() {
    const [address, setAddress] = useState("");
    const [proposal, setProposal] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        storeDetail?.();
    }

    return(
          
      <div className="bg-[#0a0213] border border-white mt-10 ml-20 text-center mb-5  rounded-md justify-center w-[500px]"><br/><br/><br/><br/><br/>
            <h1 className='text-white font-semibold p-2 text-xl'>
            REGISTER EVENT
            </h1>
            <form onSubmit={handleSubmit}>
            
            <label className='text-white text-xl'>
            Admin address: <br/>
            </label>
            <input type="text" placeholder="enter wallet address" onChange={(e) => setAddress(e.target.value)} className='py-3 px-1 rounded-lg'/>
            <br/><br/><br/><br/>
            <label className='text-white text-xl'>
            Event detail:<br/>
            </label>
                <textarea type="text" placeholder="tell us about the event" rows="4" cols="50" onChange={(e) => setProposal(e.target.value)} className='py-3 px-1 rounded-lg'/>
            <br/><br/><br/><br/>

            <button className="bg-[#ebdcfa] text-[#19072b] text-lg font-bold rounded-md py-3 px-8 hover:bg-[#8f8499] hover:text-white border-radius mb-5" type="submit">{"Register event"}</button>
            </form>
            <br/> <br/> <br/> <br/>
    </div>
    )

}
