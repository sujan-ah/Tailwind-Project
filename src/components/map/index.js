import React from "react";

const Map = () => {
  return (
    <section>
      <div
        className="h-[450px] pt-[110px] pb-[75px]"
        style={{ background: "url(images/maps.png)" }}
      ></div>

      <nav className="bg-primary py-7 border-b-2 border-yellowborder">
        <div className="max-w-container mx-auto flex">
          <div className="w-4/5	font-pop font-bold text-[36px] text-white">
            <h3>Want to join as member branch in your area?</h3>
          </div>
          <div className="w-1/5 flex items-center justify-end">
            <a
              href="#"
              className="font-pop text-base	font-semibold text-white border py-3.5 px-3.5 mx-16 mr-0"
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Map;
