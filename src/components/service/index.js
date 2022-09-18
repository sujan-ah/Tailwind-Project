import React from "react";

const Service = () => {
  return (
    <section>
      <div className="flex flex-wrap mt-7">
        <div className="w-2/4 flex flex-col items-end mt-[106px] pr-[149px]	">
          <h3 className="font-pop font-bold text-[64px] ">Our Services</h3>
          <p className="font-pop font-medium text-base w-[405px] text-[#6C6C6C]	">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div
          className="w-2/4 pt-36	pl-28	pb-36		"
          style={{ background: "url(images/Services1.png)" }}
        >
          <h4 className="font-pop font-bold text-4xl text-white mb-7">
            Modern natural oil and gas refineries.
          </h4>

          <a
            href="#"
            className="bg-primary font-pop font-semibold text-base text-white py-3.5 px-8 border hover:bg-transparent ease-linear	duration-300"
          >
            Learn More
          </a>
        </div>

        <div
          className="w-2/4 pt-36	pl-28	pb-36		"
          style={{ background: "url(images/Services3.png)" }}
        >
          <h4 className="font-pop font-bold text-4xl text-white mb-7">
            Supply of national industries.
          </h4>

          <a
            href="#"
            className="inline-block bg-primary font-pop font-semibold text-base text-white py-3.5 px-8 border hover:bg-transparent hover:border-white ease-linear	duration-300"
          >
            Learn More
          </a>
        </div>

        <div
          className="w-2/4 pt-36	pl-28	pb-36		"
          style={{ background: "url(images/Services2.png)" }}
        >
          <h4 className="font-pop font-bold text-4xl text-white mb-7">
            National fuel distribution and supply.
          </h4>

          <a
            href="#"
            className="bg-primary font-pop font-semibold text-base text-white py-3.5 px-8 border hover:bg-transparent hover:border-white ease-linear	duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;
