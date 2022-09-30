import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Blog = () => {
  return (
    <section>
      <div
        className="h-auto	pt-16 md:pt-[110px] pb-16 md:pb-[75px]"
        style={{ background: "url(images/backgroundcompany.png)" }}
      >
        <div className="max-w-container mx-auto px-2.5 md:px-0">
          <div className="md:flex gap-x-14">
            <div
              className="md:w-2/6 bg-primary group "
              style={{
                background: "url(images/blogimg3.png) no-repeat center",
                backgroundSize: "cover",
              }}
            >
              <div className="w-full h-full bg-darklight sml:py-16 md:!py-0">
                <h4
                  className="font-pop font-bold 
                text-[24px] md:!text-[24px] lap:text-[36px]
                text-white md:w-[320px] px-[40px] pt-[75px] group-hover:text-primary "
                >
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
              className="md:w-2/6 bg-primary group"
              style={{
                background: "url(images/blogimg2.png) no-repeat center",
                backgroundSize: "cover",
              }}
            >
              <div className="w-full h-full bg-darklight sml:py-16 md:!py-0">
                <h4
                  className="font-pop font-bold 
                text-[24px] md:!text-[24px] lap:text-[36px] 
                text-white md:w-[320px] px-[44px] pt-[75px]	group-hover:text-primary"
                >
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
              className="md:w-2/6 bg-primary group "
              style={{
                background: "url(images/blogimg1.png) no-repeat center",
                backgroundSize: "cover",
              }}
            >
              <div className="w-full h-full bg-darklight sml:py-16 md:!py-0">
                <h4
                  className="font-pop font-bold 
                text-[24px] md:!text-[24px] lap:text-[36px]
                text-white md:w-[320px] px-[44px] pt-[75px]	group-hover:text-primary"
                >
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

          <p className="flex justify-end font-pop font-bold text-base text-[#000000] mt-[28px] ">
            MORE FROM THE BLOG
            <FaAngleRight className="text-[20px] mt-[1px]" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
