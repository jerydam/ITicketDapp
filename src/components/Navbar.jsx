import React, { useState } from "react";
import Connect from "./Connect";
import Link from 'next/link';
import UpdateProfileCard from '../features/profile/component/updateprofile';
import Image from 'next/image';
import logo from "../images/iticket.png"
import Update from 'src/components/Update.jsx';
const Navbar = () => {
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  const [open, setOpen] = useState(false);

  const handleUpdateProfileClick = () => {
    setShowUpdateProfile(true);
    setOpen(true)
  };
  const handleClose = () =>{
    setShowUpdateProfile(false);
    setOpen(false)
  }
  
  const handleUpdateProfileClose = () => {
    setShowUpdateProfile(false);
    document.body.style.overflow = 'visible';
  };

  return (
        <div className="ml-[80%] position-absolute flex items-center">
          <Connect />
        </div>

 );
};

export default Navbar;
