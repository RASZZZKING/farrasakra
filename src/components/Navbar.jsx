"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const path = usePathname();
  const LinkNav = ({ children, url }) => (
    <li>
      <Link
        href={url}
        className={`${
          path === url && "font-semibold text-white border border-slate-800"
        }`}
      >
        {children}
      </Link>
    </li>
  );
  return (
    <div className="flex justify-center ">
      <div className="navbar max-lg:px-4 border-b-2 border-b-slate-600 bg-base-100">
        <div className="flex-1">
          <Link
            href={"/"}
            className="btn max-lg:btn-sm btn-ghost border-2 border-slate-900 hover:border-slate-200 hover:bg-black text-xl"
          >
            FE | Farrasakra
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1  max-lg:hidden">
            <LinkNav url={"/"}>HOME</LinkNav>
            <LinkNav url={"/about"}>ABOUT</LinkNav>
            <LinkNav url={"/service"}>SERVICE</LinkNav>
            <LinkNav url={"/project"}>PROJECT</LinkNav>
            <LinkNav url={"https://wa.me/+6283825012687"}>CONTACT</LinkNav>
          </ul>
          <div className="dropdown lg:hidden dropdown-left dropdown-bottom">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content -mr-10  border-white border-2 bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
