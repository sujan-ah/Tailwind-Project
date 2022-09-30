import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  let handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setOpen(true);
    }
    function screenResize(e) {
      if (window.innerWidth >= 768) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }
    window.addEventListener("resize", screenResize);
  }, []);

  return (
    <nav className="bg-primary py-7	border-t-2 border-black relative">
      <div className="max-w-container mx-auto md:flex px-1.5 md:px-0">
        <div className="md:w-1/5">
          <picture>
            <img src="images/logo.png" loading="lazy" />
          </picture>
        </div>

        <button
          onClick={handleClick}
          className="block md:hidden absolute top-9 right-2.5 text-2xl text-white"
        >
          <FaBars />
        </button>

        {open && (
          <div className="md:w-4/5  md:flex items-center	justify-end py-2.5 md:py-0">
            <ul className="font-pop text-base	font-semibold text-white flex flex-col md:flex-row md:gap-x-12 gap-y-1.5	md:gap-y-0">
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
            <div className="mt-5 md:mt-0">
              <a
                href="#"
                className="font-pop text-base	font-semibold text-white border py-3.5 px-3.5 md:mx-16 md:mr-0"
              >
                CONTACT
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
