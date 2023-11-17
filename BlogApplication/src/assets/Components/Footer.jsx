import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BrandLogo } from "../../utility/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#232536] mt-[4rem] sm:mt-[8rem]">
      <nav className="flex md:flex-row flex-col  md:justify-between items-center  px-20 max-md:px-5 ml-[2.5rem] pt-3">
        <h1 className="text-white font-bold text-center text-[1.5rem] md:text-[3.5rem] cursor-pointer mt-5 px-6 py-4 ">
          <BrandLogo/>
        </h1>

        <ul className="flex items-stretch justify-center md:justify-between flex-col md:flex-row gap-5 mt-8 max-md:max-w-full max-md:mt-10 text-white text-base leading-7 font-bold">
        <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </ul>
      </nav>

      <form className="bg-white bg-opacity-10 mt-14 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5 mx-[5rem]">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0 ">
            <div className="text-white text-xl sm:text-[2rem] font-bold leading-10 tracking-tighter my-auto max-md:max-w-full max-md:mt-10  md:mx-[0.5rem] md:text-[1.0rem] items-center sm:w-[39rem]">
              Subscribe to our newsletter to get the latest updates and news
            </div>
          </div>

          <div className="flex flex-col items-stretch w-[35%] ml-10 max-md:w-full max-md:ml-0 md:w-full ">
            <label htmlFor="email" className="  overflow-visible "></label>
            <input
              type="email"
              id="email"
              className="justify-center  text-base leading-7 border border-[color:var(#4C4C4C)] w-full m-auto px-5 py-6 border-solid max-md:mt-10 max-md:pl-1.5 md:text-[0.9rem] bg-white md:gap-5"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-col items-stretch w-[16%] ml-5 max-md:w-full max-md:ml-0 md:ml-[6.5rem]">
            <button className="text-gray-800 text-lg font-bold leading-6 whitespace-nowrap items-center bg-amber-300 w-full m-auto px-5 py-4 max-md:mt-10">
              Subscribe
            </button>
          </div>
        </div>
      </form>
      <footer className="flex justify-between gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-sm:ml-7">
        <div className="text-white text-base leading-7 opacity-70 grow shrink basis-auto">
          Finstreet 118 2561 Fintown
        </div>

        <div className="flex mr-10">
          <ul className="flex space-x-3  color-[#6D6E76] gap-[0.2rem] md:gap-[1.6rem]">
            <li>
              <FaFacebook style={{ color: "#6D6E76" }} />
            </li>
            <li>
              <FaTwitter style={{ color: "#6D6E76" }} />
            </li>
            <li>
              <FaInstagram style={{ color: "#6D6E76" }} />
            </li>
            <li>
              <FaLinkedin style={{ color: "#6D6E76" }} />
            </li>
          </ul>
        </div>
      </footer>
      <span className="text-white text-[1rem] sm:text-base leading-7 opacity-70 max-md:max-w-full max-md:mb-10 max-sm:ml-3.5 max-sm:mt-1.5">
        Hello@finsweet.com 020 7993 2905
      </span>
    </div>
  );
};

export default Footer;
