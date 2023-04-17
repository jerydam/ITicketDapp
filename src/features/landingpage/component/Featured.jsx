/** @format */

import { React, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Featured = (prop) => {

  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col m-4 rounded-lg pb-10 bg-[#EFF2F9]" >
      <img src={prop.imgSrc} className="w-full h-3/5 rounded-t-lg" />
      <div className="flex justify-between w-full">
        <div className="flex w-full">
          <div>
            <img src={prop.avatar} className="w-10 rounded-full mt-5 pl-3" />
          </div>
          <div className="mt-4 ml-4">
            <h4 className="font-bold text-[16px] text-fair-blue">
              {prop.username}
            </h4>
            <p className="text-fair-blue text-[14px]">{prop.order}</p>
          </div>
        </div>
       
      </div>
      <div className="w-full" >
        
        <h2 className="text-fair-blue text-[16px] leading-[18px] font-bold px-4">{prop.skill}</h2>
        <div className="flex justify-between">
          <h2 className="text-[#132C8D] font-bold text-[16px] pl-4 pt-1 ">
            Price {prop.price}
          </h2>
          <button
            className="px-7 py-2 text-[14px] border border-blue-300 rounded-lg mr-4 bg-[#132C8D] hover:bg-[#052C5B] text-white"
            onClick={handleClickOpen}
          >
            Register
          </button>
        </div>
      </div>

     
    </div>
  );
};

export default Featured;
