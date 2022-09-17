import React from "react";

const Banner = () => {
  return (
    <div style={{ background: "url(images/banner.png)" }}>
      <div className="h-full w-full bg-darklight ">
        <div className="max-w-container mx-auto py-64">
          <h1 className="font-pop text-white font-bold	text-[64px]	w-[842px] mb-8">
            We exist since 1975 on the oil and gas industry.
          </h1>
          <a
            href="#"
            className="bg-primary font-pop text-base font-semibold text-white border py-3.5 px-3.5 hover:bg-transparent ease-linear	duration-300"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
