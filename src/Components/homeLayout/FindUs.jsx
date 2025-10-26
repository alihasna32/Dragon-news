import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold 
      mb-4">Find Us On</h2>

      <div className="join join-vertical w-full gap-2 ">
        <button className="btn join-item bg-base-100 justify-start"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn join-item bg-base-100 justify-start"><BsTwitter></BsTwitter> Twitter</button>
        <button className="btn join-item bg-base-100 justify-start"><ImInstagram></ImInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
