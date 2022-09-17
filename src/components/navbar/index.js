import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary py-7	">
      <div className="max-w-container mx-auto flex">
        <div className="w-1/5">
          <picture>
            <img src="images/logo.png" loading="lazy" />
          </picture>
        </div>
        <div className="w-4/5 flex items-center	justify-end">
          <ul className="font-pop text-base	font-semibold text-white flex gap-x-12 	">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <a
            href="#"
            className="font-pop text-base	font-semibold text-white border py-3.5	px-3.5 mx-16"
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
