import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export default function StickyNavbar() {
  const { user, signOut } = useAuth();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["Home", "Account", "Success Stories", "Contact"].map((item) => (
        <Typography
          key={item}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center hover:text-blue-600">
            {item}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <div className="max-h-screen w-full">
      <Navbar className="sticky top-0 z-10 bg-white px-4 py-2 shadow-md lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          {/* Stylish Curved Logo */}
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer text-3xl font-bold tracking-wide text-blue-600"
            style={{
              fontFamily: "'Pacifico', cursive",
              transform: "rotate(-9deg)",
              letterSpacing: "2px",
            }}
          >
            Jobs BD
          </Typography>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">{navList}</div>

          {/* Buttons */}
          <div className="hidden items-center gap-x-4 lg:flex">
            {user ? (
              <Button onClick={() => signOut()} color="red">
                Sign Out
              </Button>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="text" size="sm">
                    Log In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="gradient" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>

        {/* Mobile Menu */}
        <MobileNav open={openNav}>
          {navList}
          <div className="mt-4 flex flex-col gap-2">
            <Link to="/login">
              <Button fullWidth variant="text" size="sm">
                Log In
              </Button>
            </Link>
            <Link to="/register">
              <Button fullWidth variant="gradient" size="sm">
                Sign Up
              </Button>
            </Link>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
