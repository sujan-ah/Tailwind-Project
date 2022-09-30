import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <section>
      <div style={{ background: "url(images/footerbg.png) " }}>
        <div className="max-w-container mx-auto pt-[30px] md:pt-[143px] pb-[10px] md:pb-[185px] px-2.5 md:px-0 ">
          <div className="md:flex">
            <div className="md:w-2/5">
              <picture>
                <img
                  className="mb-[20px] md:mb-[33px]"
                  src="images/logo.png"
                  loading="lazy"
                />
              </picture>

              <div className=" flex flex-col gap-y-4">
                <p className="font-pop text-xs font-normal relative pl-6 text-white ">
                  <AiOutlineMail className="absolute left-0 top-0	text-lg" />
                  mail@yourcompany.com
                </p>
                <p className="font-pop text-xs font-normal relative pl-6 text-white 	">
                  <FiPhoneCall className="absolute left-0 top-0	text-lg" />
                  +896 120 5889 (Toll free)
                </p>
                <p className="font-pop text-xs font-normal relative pl-6 text-white 	">
                  <FiMapPin className="absolute left-0 top-0 text-white	text-lg" />
                  101 Baker Street, New York, USA, 12345
                </p>
              </div>

              <div className="w-2/4 text-white flex justify-start gap-x-5 ml-0 mt-[16px] md:mt-[33px] ">
                <div className="w-8 h-8 bg-primary px-2 py-2 rounded-3xl">
                  <FaFacebookF />
                </div>
                <div className="w-8 h-8 bg-primary px-2 py-2 rounded-3xl">
                  <GrTwitter />
                </div>
                <div className="w-8 h-8 bg-primary px-2 py-2 rounded-3xl">
                  <FaLinkedinIn />
                </div>
                <div className="w-8 h-8 bg-primary px-2 py-2 rounded-3xl">
                  <BsInstagram />
                </div>
              </div>
            </div>

            <div className="md:w-3/5 mt-[40px] flex flex-wrap md:flex md:justify-end">
              <div className="md:w-1/3 mr-[100px] md:mr-0">
                <h5 className="font-pop font-bold text-base text-white mb-3 md:mb-[21px]">
                  Company
                </h5>
                <ul className="font-pop font-normal	 text-[14px] text-white flex flex-col gap-y-[8px] md:gap-y-[15px]">
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Gallery</li>
                </ul>
              </div>

              <div className="md:w-1/3">
                <h5 className="font-pop font-bold text-base text-white mb-3 md:mb-[21px]">
                  Others
                </h5>
                <ul className="font-pop font-normal	 text-[14px] text-white flex flex-col gap-y-[8px] md:gap-y-[15px]">
                  <li>Blog</li>
                  <li>Contact</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>

              <div className="md:w-1/3 flex justify-end mt-8 sml:mt-0 md:mt-0 pb-3 md:pb-0 sml:ml-20 md:!ml-0">
                <div>
                  <h5 className="font-pop font-bold text-base text-white mb-[10px] md:mb-[21px]">
                    Certificate
                  </h5>
                  <div className="flex flex-row gap-x-1">
                    <div>
                      <img src="images/Cert1.png" alt="" />
                    </div>
                    <div>
                      <img src="images/Cert1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="md:h-24"
        style={{ background: "url(images/footerbg2.png) " }}
      >
        <div className="max-w-container mx-auto py-3 md:py-10 px-2.5 md:px-0 flex justify-center md:justify-start">
          <p className="font-pop font-medium text-[10px] md:text-base text-[#6C6C6C]">
            © Copyright 2022 by AltDesain Studio – All right reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
