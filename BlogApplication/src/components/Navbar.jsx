import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../assets/data/data";
import { BrandLogo } from "../utility/icons";
import { SUBSCRIBE } from "../assets/constants/routePaths";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="bg-[#232536] px-8 py-4">
      <div className="flex justify-between">
        <BrandLogo />
        <div>
          <IoClose size={"2.4rem"} fill="#fff" />
          <FaBars size={"2.4rem"} fill="#fff" />
        </div>
      </div>

      <ul className="grid justify-items-center gap-8 my-12">
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink
              className="no-underline text-[1.6rem] font-normal leading-[2.8rem] text-[#fff]"
              to={link.href}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
        <button>
          <Link className="text-[#232536]" to={SUBSCRIBE}>
            Subscribe
          </Link>
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
