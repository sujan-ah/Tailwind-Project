import React from "react";

const Company = () => {
  return (
    <section>
      <div
        className="h-124 pt-[136px] pb-[136px]"
        style={{ background: "url(images/backgroundcompany.png)" }}
      >
        <div className="max-w-container mx-auto">
          <div className="flex">
            <div className="w-[413px] bg-primary">
              <h4 className="font-pop font-bold text-[32px] text-white w-[362px] px-[77px] py-[100px]	">
                Learn more about our company
              </h4>
            </div>
            <div
              className="w-[726px]  bg-yellowborder flex justify-center items-center"
              style={{ background: "url(images/companyimg.png)" }}
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

      <div className="max-w-container mx-auto">
        <div className="flex gap-x-12 py-28	">
          <img src="images/logo1.png" />
          <img src="images/logo2.png" />
          <img src="images/logo3.png" />
          <img src="images/logo4.png" />
        </div>
      </div>
    </section>
  );
};

export default Company;
