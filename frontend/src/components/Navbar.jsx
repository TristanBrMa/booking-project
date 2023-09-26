import PropTypes from "prop-types";
import { Link } from "react-scroll";

import logo from "../assets/images/logo2.png";

const Navbar = ({ labyrintheToggle, mauvaisGoutToggle, zoomToggle }) => {
  return (
    <nav
      className={`" navbar py-4 flex justify-between bg-secondary text-2xl " ${
        labyrintheToggle && "animate-spin-slow"
      } ${mauvaisGoutToggle && " navbar flex bg-red-500"} ${
        zoomToggle && "text-custom"
      }`}
    >
      <img
        src={logo}
        alt="Logo"
        className={`" h-20 " ${mauvaisGoutToggle && " rounded-full "}`}
        tabIndex={1}
      />

      <ul className="hidden md:flex gap-14 font-megrim text-accent font-bold  pr-8 ">
        <Link
          to="description"
          spy={true}
          smooth={true}
          offset={-300}
          duration={500}
          className="cursor-pointer"
          tabIndex={2}
        >
          <li className="hover:text-primary">Histoire</li>
        </Link>
        <Link
          to="forum"
          spy={true}
          smooth={true}
          offset={-250}
          duration={500}
          className="cursor-pointer"
          tabIndex={3}
        >
          <li className="hover:text-primary">Forum</li>
        </Link>
        <Link
          to="commentaires"
          spy={true}
          smooth={true}
          offset={-250}
          duration={500}
          className="cursor-pointer"
          tabIndex={4}
        >
          <li className="hover:text-primary">Commentaires</li>
        </Link>
      </ul>
      <div className="dropdown md:hidden">
        <label tabIndex={2} className="btn btn-ghost md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul className="menu menu-sm dropdown-content mt-[5.5rem] z-[55] text-gray-800 w-96 -right-2 bg-secondary">
          <li className="h-16 border-t-2 font-bold flex justify-center items-end pr-2 border-accent ">
            <Link
              to="description"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="cursor-pointer"
              tabIndex={3}
            >
              Histoire
            </Link>
          </li>
          <li className="h-16 border-t-2 font-bold flex justify-center items-end pr-2 border-accent">
            <Link
              to="forum"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="cursor-pointer"
              tabIndex={4}
            >
              Forum
            </Link>
          </li>
          <li className="h-16 border-t-2 font-bold flex justify-center items-end pr-2 border-accent">
            <Link
              to="commentaire"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="cursor-pointer"
              tabIndex={4}
            >
              Commentaire
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  labyrintheToggle: PropTypes.bool.isRequired,
  mauvaisGoutToggle: PropTypes.bool.isRequired,
  zoomToggle: PropTypes.bool.isRequired,
};

export default Navbar;
