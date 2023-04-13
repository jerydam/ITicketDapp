/** @format */

import {
  FaMapMarker,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bottom-0  w-full overflow-clip">
      <div className="bg-[#3b055b] justify-between  text-center pb-[100px] pt-[20px] ">
        <h3 className="text-white text-[32px] font-bold text-center">
          Subscribe Now!
        </h3>
        <p className="text-white text-[14px] ">
        We care about your event 
        </p>
        <form className=" w-full items-center mt-[12px] ">
          <div className="rounded-lg w-full">
            <input
              type="email"
              name=""
              id=""
              placeholder="example@iticket.com"
              className="h-12 w-2/4 text-start rounded-l-lg px-4"
            />
            <button
              type="submit"
              className="w-12 bg-[#132c8d] rounded-r-lg hover:bg-[#] h-12 "
            >
              <FaArrowRight className="text-light-blue ml-4" />
            </button>
          </div>
        </form>
      </div>


      <div className="bg-[#000000]">
       
            <div className="mt-5 mx-auto flex text-[#fff] pt-4 justify-center gap-8">
              <a href="/" className="">
                <FaFacebookF className="" size={30}/>
              </a>
              <a href="/" className="">
                <FaTwitter size={30}/>
              </a>
              <a href="/" className="">
                <FaLinkedin size={30} />
              </a>
              <a href="/" className="">
                <FaInstagram size={30}/>
              </a>
              <a href="/" className="text-red-700 ">
                <FaYoutube size={30}/>
              </a>
            </div>
            <div className="mt-[40px] mx-auto flex text-[#fff] justify-center gap-8">
              <a href="/" className="text-light">
                Home
              </a>
              <a href="/" className="">
                About us
              </a>
              <a href="/" className="text-light">
               T&C
              </a>
              <a href="/" className="text-light">
                Privacy policy
              </a>
            
            </div>
         
      
        <div className="text-[14px] text-[#fff] mt-7 text-center pb-4">
        &copy; itickeck 2023 All rights reserved
      </div>
      </div>
      
    </div>
  );
};

export default Footer;
