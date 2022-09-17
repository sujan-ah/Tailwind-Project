import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";

const Header = () => {
  return (
    <header className="bg-black py-4	border-b-2 border-yellowborder">
      <div className="max-w-container mx-auto">
        <div className="flex">
          <div className="w-2/4 flex">
            <p
              className="font-pop text-xs font-normal relative pl-6 text-white after:absolute after:top-[0] after:right-[-28px] after:w-0.5
            after:h-full after:content-[''] after:bg-yellowborder"
            >
              <AiOutlineMail className="absolute left-0 top-0	text-lg" />
              mail@yourcompany.com
            </p>
            <p className="font-pop text-xs font-normal relative pl-6 text-white ml-14	">
              <FiPhoneCall className="absolute left-0 top-0	text-lg" />
              +896 120 5889 (Toll free)
            </p>
          </div>
          <div className="w-2/4 text-white flex justify-end gap-x-5">
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
