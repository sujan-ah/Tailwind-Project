import React from "react";

const Company = () => {
  return (
    <section>
      <div
        className="md:h-124 py-[50px] md:p-[136px]"
        style={{ background: "url(images/backgroundcompany.png)" }}
      >
        <div className="max-w-container mx-auto px-2.5 md:px-0">
          <div className="md:flex lap:flex">
            <div className="lap:w-[413px] md:w-[413px] bg-primary">
              <h4 className="font-pop font-bold text-[30px] sml:text-[32px] text-white md:w-[362px] px-[77px] py-[100px]	">
                Learn more about our company
              </h4>
            </div>

            <div
              className="lap:w-[726px] md:w-[726px] h-[300px]  lap:h-auto md:h-auto  bg-yellowborder flex justify-center items-center"
              style={{
                background: "url(images/companyimg.png) no-repeat center",
                backgroundSize: "cover",
              }}
            >
              <a
                href="#"
                className="bg-white py-3.5 px-7 font-pop font-bold text-base text-[#F40404] absolute mt-[40px]"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-container mx-auto px-2.5 md:px-0">
        <div
          className="py-8 md:py-28  sml:flex sml:flex-wrap sml:px-10	
          md:!px-0 md:!flex-nowrap md:!gap-x-12  
          lap:flex-wrap lap:gap-x-36 lap:px-36"
        >
          <img className="ml-5 md:ml-0" src="images/logo1.png" />
          <img src="images/logo2.png" />
          <img className="ml-5 md:ml-0" src="images/logo3.png" />
          <img src="images/logo4.png" />
        </div>
      </div>
    </section>
  );
};

export default Company;
