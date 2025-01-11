import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-green-700 text-white shadow-md">
        <div className="flex justify-between items-center px-4 py-3">
          {/* Brand */}
          <Link className="font-bold text-lg" to="/">
            CSIT CP
          </Link>

          {/* Hamburger Menu (Visible on Small Screens) */}
          <button
            className="text-white md:hidden"
            onClick={toggleSidebar}
          >
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>

          {/* Links (Hidden on small screens) */}
          <div className="hidden md:flex gap-6 items-center">
            <Link className="hover:text-green-300" to="/">
              Home
            </Link>
            <Link className="hover:text-green-300" to="/notification">
              Notification
            </Link>
            <Link className="hover:text-green-300" to="/about">
              About
            </Link>
            <Link className="hover:text-green-300" to="/contact">
              Contact
            </Link>
            <Link
              className="text-green-700 bg-white border hover:bg-transparent hover:text-white px-4 py-2 rounded shadow"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Collapsible Sidebar (Visible on Small Screens) */}
        {isOpen && (
          <div className="bg-green-600 md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link
                className="hover:text-green-300 border-b border-green-500 pb-2"
                to="/"
                onClick={toggleSidebar}
              >
                Home
              </Link>
              <Link
                className="hover:text-green-300 border-b border-green-500 pb-2"
                to="/notification"
                onClick={toggleSidebar}
              >
                Notification
              </Link>
              <Link
                className="hover:text-green-300 border-b border-green-500 pb-2"
                to="/about"
                onClick={toggleSidebar}
              >
                About
              </Link>
              <Link
                className="hover:text-green-300 border-b border-green-500 pb-2"
                to="/contact"
                onClick={toggleSidebar}
              >
                Contact
              </Link>
              <Link
                className="text-green-700 bg-white border hover:bg-transparent hover:text-white px-4 py-2 rounded shadow"
                to="/login"
                onClick={toggleSidebar}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
