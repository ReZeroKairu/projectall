import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../Authcontext";
import { VscAccount } from "react-icons/vsc";
const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed w-full">
      <div className="fixed right-2.5 mt-4 ">
        <VscAccount />
      </div>
      <h1 className="text-4xl font-bold border-r-0 border-l-0   bg-red-800 text-center p-1.5 text-white border-2 border-black">
        PubTrack
      </h1>

      <div className="bg-white text-black border-b-2 border-l-0 border-r-0   border-black flex justify-between items-center p-2 ">
        {user?.displayName ? (
          <span className="">Welcome, {user.displayName}</span>
        ) : (
          <span className="invisible">placeholder</span> // Use a placeholder to maintain space
        )}

        <nav>
          <Link
            to="/account"
            className="pr-4 pl-4  border-l-2 h-full border-black hover:bg-gray-600 active:text-red-600 active:bg-gray-300 active:scale-95 transition-transform duration-150"
          >
            Home
          </Link>
          {user?.displayName ? (
            <button
              onClick={handleSignOut}
              className=" pr-4 pl-4  border-l-2 h-full border-black hover:bg-gray-600 active:text-red-600 active:bg-gray-300 active:scale-95 transition-transform duration-150"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/signin"
              className="pr-4 pl-4 border-l-2 h-full border-black hover:bg-gray-600 active:text-red-600 active:bg-gray-300 active:scale-95 transition-transform duration-150"
            >
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
