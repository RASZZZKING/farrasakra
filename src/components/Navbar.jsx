"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const path = usePathname()
  const LinkNav = ({ children, url }) => (
    <li>
      <Link href={url} className={`${path === url && "font-semibold text-white border border-slate-800"}`}>{children}</Link>
    </li>
  );
  return (
    <div className="flex justify-center ">
      <div className="navbar px-0 border-b-2 border-b-slate-600 bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost border-2 border-slate-900 hover:border-slate-200 hover:bg-black text-xl">
            FE | Farrasakra
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <LinkNav url={"/"}>HOME</LinkNav>
            <LinkNav url={"/about"}>ABOUT</LinkNav>
            <LinkNav url={"/service"}>SERVICE</LinkNav>
            <LinkNav url={"/project"}>PROJECT</LinkNav>
            <LinkNav url={"https://wa.me/+6283825012687"}>CONTACT</LinkNav>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
