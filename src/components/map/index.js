import React from "react";

const Map = () => {
  return (
    <section>
      <div
        className="h-[450px] pt-[110px] pb-[75px]"
        style={{ background: "url(images/maps.png)" }}
      ></div>

      <nav className="bg-primary py-7 border-b-2 border-yellowborder">
        <div className="max-w-container mx-auto flex lap:flex lap:justify-between px-2.5 md:px-0">
          <div className="md:w-4/5 font-pop font-bold sml:text-[23px] text-base	md:!text-4xl  tab:text-2xl lap:text-[34px]  text-white tab:mt-3">
            <h3>Want to join as member branch in your area?</h3>
          </div>

          <div className="md:w-1/5 flex items-center justify-end">
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
