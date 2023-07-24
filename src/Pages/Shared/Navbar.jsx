import React, { useState } from "react";
import Headroom from "react-headroom";
import { IoMdClose } from "react-icons/io";
import { IoLogoMicrosoft } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthGlobally } from "../../Context/AuthProvider";
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const { user, logOut } = useAuthGlobally({});

  const handelTost = () => {
    if (!user) {
      toast("You Have To Login First To View Details");
    }
  };

  
  return (
    <Headroom>
      <nav className="bg-base-100 shadow">
        <div className="navbar   container mx-auto">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-3xl">
              <img className="w-10" src="/toy.png" alt="" />
              <h1>
                Turbo<span className="text-warning">ToyCars</span>
              </h1>
            </Link>
          </div>
          <span className="text-3xl hover:cursor-pointer md:hidden">
            {toggle ? (
              <IoMdClose onClick={() => setToggle(!toggle)} />
            ) : (
              <IoLogoMicrosoft onClick={() => setToggle(!toggle)} />
            )}
          </span>
          <ul
            className={`flex items-center duration-200 z-50 flex-col py-5 md:p-0 text-white text-lg font-medium  bg-opacity-80 md:text-black top-14 bg-black md:bg-transparent w-full md:w-auto md:flex-row gap-3 absolute md:static ${
              toggle ? "left-0" : "-left-full"
            }`}
          >
            <li>
              <NavLink onClick={() => setToggle(false)} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setToggle(false)} to="/all-toys">
                All Toys
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setToggle(false)} to="/blog">
                Blogs
              </NavLink>
            </li>
            {user ? (
              <>
                <li>
                  <NavLink
                    onClick={() => setToggle(false)}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="MyToys"
                  >
                    My Toys
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setToggle(false)}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/add-toys"
                  >
                    Add A Toys
                  </NavLink>
                </li>
              </>
            ) : (
              ""
            )}

            <li>
              {user?.photoURL ? (
                <img
                  className="w-[35px] h-[35px] rounded-full"
                  src={user?.photoURL}
                  title={user.displayName}
                  alt=""
                />
              ) : (
                ""
              )}
            </li>

            <li>
              {user ? (
                <button
                  onClick={logOut}
                  className="bg-[#FFB6C6]   px-4 py-2 rounded-md  text-white"
                >
                  LogOut
                </button>
              ) : (
                <button className="bg-[#FFB6C6] text-lg  px-4 py-2 rounded-md text-white">
                  <Link to="/login">Login</Link>
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </Headroom>
  );
};

export default Navbar;
