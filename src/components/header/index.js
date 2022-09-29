import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";

const Header = () => {
  return (
    <header className="bg-black py-4	border-b-4 border-yellowborder">
      <div className="max-w-container mx-auto px-2.5 md:px-0">
        <div className="sml:flex">
          <div className="sml:w-9/12 sml:flex ">
            <p
              className="font-pop text-xs font-normal relative pl-6 text-white after:absolute after:top-[0] after:right-[-28px] after:w-0.5
            after:h-full after:content-[''] after:bg-yellowborder"
            >
              <AiOutlineMail className="absolute left-0 top-0	text-lg " />
              mail@yourcompany.com
            </p>

            <p className="font-pop text-xs font-normal relative pl-6 text-white sml:ml-14 my-2.5 sml:my-0">
              <FiPhoneCall className="absolute left-0 top-0	text-lg" />
              +896 120 5889 (Toll free)
            </p>
          </div>

          <div className="sml:w-3/12 text-white flex sml:justify-end gap-x-4">
            <FaFacebookF />
            <GrTwitter />
            <FaLinkedinIn />
            <BsInstagram />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
