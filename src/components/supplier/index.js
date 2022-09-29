import React from "react";

export const Supplier = () => {
  return (
    <section>
      <div className="max-w-container mx-auto mt-10 md:mt-[78px] px-2.5 md:px-0 ">
        <div className="md:flex justify-between">
          <div className="md:max-w-[289px]">
            <h2 className="font-pop font-bold text-4xl md:text-5xl leading-[50px] md:leading-[72px]">
              The biggest supplier on the country
            </h2>
          </div>

          <div className="max-w-[651px] flex items-center">
            <h2 className="font-pop font-medium text-base	leading-6 text-[#6C6C6C] mt-2 md:mt-0">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:gap-y-5 md:gap-y-0 md:flex-row md:flex md:gap-x-7 mt-5 md:mt-24 px-2.5 md:px-0 sml:flex-row flex-wrap md:flex-nowrap ">
        <div className="sml:w-2/4 md:w-auto">
          <picture>
            <img className="w-full" src="images/supplier.png" loading="lazy" />
          </picture>
        </div>
        <div className="sml:w-2/4 md:w-auto">
          <picture>
            <img className="w-full" src="images/supplier2.png" loading="lazy" />
          </picture>
        </div>
        <div className="sml:w-2/4 md:w-auto">
          <picture>
            <img className="w-full" src="images/supplier3.png" loading="lazy" />
          </picture>
        </div>
        <div className="sml:w-2/4 md:w-auto">
          <picture>
            <img className="w-full" src="images/supplier4.png" loading="lazy" />
          </picture>
        </div>
      </div>
    </section>
  );
};
