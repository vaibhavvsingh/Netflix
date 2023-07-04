import { useState } from "react";
import { FaSearch, FaCaretDown, FaRegBell, FaBars } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import LeftDropDown from "./LeftDropDown";

function Navbar({ scrollValue }) {
  const [isHovered, setIsHovered] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <div
        className={
          "flex text-md px-12 py-2 justify-between items-center z-10 text-white sticky top-0 " +
          (scrollValue == 0 ? "nav-gradient" : "nav-gradient2")
        }
      >
        <div className="flex justify-center items-center gap-8">
          <div className="lg:hidden" onClick={() => setDropdown(!dropdown)}>
            <FaBars />
          </div>
          <Link to="/" className="">
            <img
              className="h-12 object-contain"
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt=""
            />
          </Link>
          <div className="hidden lg:flex gap-4 items-center">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>TV Shows</Link>
            <Link to={"/"}>Movies</Link>
            <Link to={"/"}>New & Popular</Link>
            <Link to={"/"}>My List</Link>
            <Link to={"/"}>Browse by Languages</Link>
          </div>
        </div>
        <div className="hidden lg:flex gap-6 items-center">
          <div>
            <FaSearch />
          </div>
          <div>Children</div>
          <div className="text-xl">
            <FaRegBell />
          </div>
          <div
            className="relative flex gap-2 items-center h-12"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="https://occ-0-2368-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcNutQs61COirYsg8-8glSyQZB2Ve6N_WX2BE7xfDgjFrc_8wK2ydNzv5_RrrSCZiqP_rI58d-Z1NjE6Bm1jTZthZFDejCk.png?r=3c3"
              alt=""
            />
            <FaCaretDown
              className={
                "transition-all duration-300 " + (isHovered ? "rotate-180" : "")
              }
            />
            <Dropdown isHovered={isHovered} />
          </div>
        </div>
        <div className="lg:hidden">
          <input
            className="p-1 bg-slate-700 text-white outline-none rounded-md"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="lg:hidden">
        <LeftDropDown dropdown={dropdown} />
      </div>
    </>
  );
}

export default Navbar;
