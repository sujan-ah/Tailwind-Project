import React from "react";

export const Supplier = () => {
  return (
    <div className="max-w-container mx-auto mt-[78px]  ">
      <div className="flex justify-between">
        <div className="max-w-[289px]">
          <h2 className="font-pop font-bold text-5xl leading-[72px]	">
            The biggest supplier on the country
          </h2>
        </div>
        <div className="max-w-[651px] flex items-center">
          <h2 className="font-pop font-medium text-base	leading-6 text-[#6C6C6C] ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </h2>
        </div>
      </div>
      <div className="flex gap-x-7	 mt-24">
        <div>
          <picture>
            <img src="images/supplier.png" loading="lazy" />
          </picture>
        </div>
        <div>
          <picture>
            <img src="images/supplier2.png" loading="lazy" />
          </picture>
        </div>
        <div>
          <picture>
            <img src="images/supplier3.png" loading="lazy" />
          </picture>
        </div>
        <div>
          <picture>
            <img src="images/supplier4.png" loading="lazy" />
          </picture>
        </div>
      </div>
    </div>
  );
};
