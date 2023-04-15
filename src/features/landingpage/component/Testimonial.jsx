import React from 'react';

function Testimonials() {
  return (
    <div className="container mx-auto px-4 py-12 lg:px-8 bg-[#5a0592] text-[#fff] font-boldrounded">
        <div id="test" style={{transition:"1s ease-in-out"}}>
      <h4 className="text-4xl text-center mb-8">How Our Users Feel</h4>
      <div className="flex flex-wrap justify-center -mx-4 lg:-mx-8">
        <div className="w-full lg:w-1/3 px-4 lg:px-8 mb-8 lg:mb-0">
          <p className="text-lg mb-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat."
          </p>
          <p className="text-lg font-bold">- John Doe, CEO of Acme Inc.</p>
        </div>
        <div className="w-full lg:w-1/3 px-4 lg:px-8 mb-8 lg:mb-0">
          <p className="text-lg mb-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat."
          </p>
          <p className="text-lg font-bold">- Jane Smith, Marketing Director at XYZ Corp.</p>
        </div>
        <div className="w-full lg:w-1/3 px-4 lg:px-8 mb-8 lg:mb-0">
          <p className="text-lg mb-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat."
          </p>
          <p className="text-lg font-bold">- Mike Johnson, Founder of ABC Co.</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Testimonials;
