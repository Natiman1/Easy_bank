import logo from "/assets/images/logo.svg";
import close from "/assets/images/icon-close.svg";
import hamburger from "/assets/images/icon-hamburger.svg";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("");
  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const id = event.currentTarget.getAttribute("href"); // Get href value
    if (id) setIsActive(id); // Update active link
    setIsOpen(false); // Close menu
  };
  return (
    <nav className="bg-White relative z-30 flex w-full items-center justify-between overflow-hidden px-8 py-6 md:py-3">
      <img src={logo} alt="logo" />
      <img
        onClick={handleToggle}
        src={isOpen ? close : hamburger}
        alt=""
        className="z-50 h-4 w-5 cursor-pointer md:hidden"
      />
      <div
        className={clsx("overlay has-fade", isOpen ? "fade-in" : "fade-out")}
      ></div>

      <div
        className={clsx(
          "text-Dark-Blue fixed top-23 right-0 left-0 mx-auto h-[265px] w-[327px] rounded-md bg-white md:relative md:top-0 md:mx-0 md:flex md:h-full md:w-auto md:flex-row md:items-center md:justify-center md:pt-5 md:pb-5 md:pl-0",
          isOpen ? "fade-in" : "fade-out",
        )}
      >
        <ul className="absolute top-[16%] right-[40%] flex flex-col items-center justify-center gap-4 font-light md:relative md:top-0 md:right-0 md:flex-row md:gap-7">
          <li>
            <a
              id="home"
              href="#home"
              className={`text-Dark-Blue hover:text-Dark-Blue md:text-Grayish-Blue md:hover:text-Dark-Blue md:after:from-Lime-Green md:after:to-Bright-Cyan relative md:pb-3 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:h-[3px] md:after:w-full md:after:bg-gradient-to-r md:after:opacity-0 md:after:transition-all md:after:duration-300 md:after:content-[''] md:hover:after:opacity-100 ${
                isActive === "#home" ? "md:after:opacity-100" : ""
              }`}
              onClick={handleClick}
            >
              Home
            </a>
          </li>
          <li>
            <a
              id="about"
              href="#about"
              className={`text-Dark-Blue hover:text-Dark-Blue md:text-Grayish-Blue md:hover:text-Dark-Blue md:after:from-Lime-Green md:after:to-Bright-Cyan relative md:pb-3 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:h-[3px] md:after:w-full md:after:bg-gradient-to-r md:after:opacity-0 md:after:transition-all md:after:duration-300 md:after:content-[''] md:hover:after:opacity-100 ${
                isActive === "#about" ? "md:after:opacity-100" : ""
              }`}
              onClick={handleClick}
            >
              About
            </a>
          </li>
          <li>
            <a
              id="contact"
              href="#contact"
              className={`text-Dark-Blue hover:text-Dark-Blue md:text-Grayish-Blue md:hover:text-Dark-Blue md:after:from-Lime-Green md:after:to-Bright-Cyan relative md:pb-3 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:h-[3px] md:after:w-full md:after:bg-gradient-to-r md:after:opacity-0 md:after:transition-all md:after:duration-300 md:after:content-[''] md:hover:after:opacity-100 ${
                isActive === "#contact" ? "md:after:opacity-100" : ""
              }`}
              onClick={handleClick}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              id="blog"
              href="#blog"
              className={`text-Dark-Blue hover:text-Dark-Blue md:text-Grayish-Blue md:hover:text-Dark-Blue md:after:from-Lime-Green md:after:to-Bright-Cyan relative md:pb-3 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:h-[3px] md:after:w-full md:after:bg-gradient-to-r md:after:opacity-0 md:after:transition-all md:after:duration-300 md:after:content-[''] md:hover:after:opacity-100 ${
                isActive === "#blog" ? "md:after:opacity-100" : ""
              }`}
              onClick={handleClick}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              id="careers"
              href="#careers"
              className={`text-Dark-Blue hover:text-Dark-Blue md:text-Grayish-Blue md:hover:text-Dark-Blue md:after:from-Lime-Green md:after:to-Bright-Cyan relative md:pb-3 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:h-[3px] md:after:w-full md:after:bg-gradient-to-r md:after:opacity-0 md:after:transition-all md:after:duration-300 md:after:content-[''] md:hover:after:opacity-100 ${
                isActive === "#careers" ? "md:after:opacity-100" : ""
              }`}
              onClick={handleClick}
            >
              Careers
            </a>
          </li>
        </ul>
      </div>
      <button className="from-Lime-Green to-Bright-Cyan hidden cursor-pointer rounded-full bg-gradient-to-r px-9 py-3.5 text-sm text-white hover:opacity-80 md:flex">
        Request Invite
      </button>
    </nav>
  );
};

export default Navbar;
