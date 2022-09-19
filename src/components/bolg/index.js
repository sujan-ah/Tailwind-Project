import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Blog = () => {
  return (
    <section>
      <div
        className="h-124 pt-[136px] pb-[136px]"
        style={{ background: "url(images/backgroundcompany.png) no-repeat" }}
      >
        <div className="max-w-container mx-auto">
          <div className="flex gap-x-14">
            <div
              className="w-2/6 bg-primary group"
              style={{ background: "url(images/blogimg3.png) no-repeat" }}
            >
              <div className="w-full h-full bg-darklight ">
                <h4 className="font-pop font-bold text-[24px] text-white w-[320px] px-[40px] pt-[75px] group-hover:text-primary ">
                  lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod.
                </h4>
                <a
                  href="#"
                  className="inline-block bg-[#888583] font-pop text-[12px] font-semibold text-white border py-2.5 px-5 my-[50px] ml-[46px] hover:bg-transparent ease-linear	duration-300"
                >
                  Read more
                </a>
              </div>
            </div>

            <div
              className="w-2/6 bg-primary group"
              style={{ background: "url(images/blogimg2.png) no-repeat" }}
            >
              <div className="w-full h-full bg-darklight">
                <h4 className="font-pop font-bold text-[24px] text-white w-[320px] px-[44px] pt-[75px]	group-hover:text-primary">
                  lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod.
                </h4>
                <a
                  href="#"
                  className="inline-block bg-[#888583] font-pop text-[12px] font-semibold text-white border py-2.5 px-5 my-[50px] ml-[46px] hover:bg-transparent ease-linear	duration-300"
                >
                  Read more
                </a>
              </div>
            </div>

            <div
              className="w-2/6 bg-primary group"
              style={{ background: "url(images/blogimg1.png)" }}
            >
              <div className="w-full h-full bg-darklight">
                <h4 className="font-pop font-bold text-[24px] text-white w-[320px] px-[44px] pt-[75px]	group-hover:text-primary">
                  lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod.
                </h4>
                <a
                  href="#"
                  className="inline-block bg-[#888583] font-pop text-[12px] font-semibold text-white border py-2.5 px-5 my-[50px] ml-[46px] hover:bg-transparent ease-linear	duration-300"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>

          <p className="flex justify-end font-pop font-bold text-base text-[#000000] mt-[28px]">
            MORE FROM THE BLOG
            <FaAngleRight className="text-[20px] mt-[1px]" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
