"use client"
import {
  ArrowUp,
  ArrowUpRight,
  Envelope,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const LinkNav = ({ children, url }) => (
    <li>
      <Link href={url}>{children}</Link>
    </li>
  );
  const LinkPlatform = ({ children, url, name }) => (
    <Link
      target="_blank"
      href={url}
      className="flex gap-1.5 items-center btn btn-ghost"
    >
      {children}
      <p className="max-lg:hidden">{name}</p>
      <ArrowUpRight size={20} className="mt-0.5 max-lg:hidden" />
    </Link>
  );
  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="flex justify-center ">
      <div className="navbar max-lg:px-4 justify-between max-lg:pb-3 px-0 border-b-2 border-b-slate-600 bg-base-100">
        <div className="max-lg:hidden">
          <a className="btn max-lg:btn-sm btn-ghost border-2 border-slate-900 hover:border-slate-200 hover:bg-black text-xl">
            FE | Farrasakra
          </a>
        </div>
        <div className="flex-none max-lg:hidden">
          <ul className="menu menu-horizontal px-1">
            <LinkNav url={"/"}>HOME</LinkNav>
            <LinkNav url={"/about"}>ABOUT</LinkNav>
            <LinkNav url={"/service"}>SERVICE</LinkNav>
            <LinkNav url={"/project"}>PROJECT</LinkNav>
            <LinkNav url={"/contact"}>CONTACT</LinkNav>
          </ul>
        </div>
        <div className="">
          <LinkPlatform
            name={"Instagram"}
            url={"https://www.instagram.com/farrasakra"}
          >
            <InstagramLogo size={20} />
          </LinkPlatform>
          <LinkPlatform name={"Gmail"} url={"instagram.com/farrasakra"}>
            <Envelope size={20} />
          </LinkPlatform>
          <LinkPlatform name={"Whatsapp"} url={"https://wa.me//+6283825102687"}>
            <WhatsappLogo size={20} />
          </LinkPlatform>
        </div>
        <div onClick={scrollToTop} className="btn lg:hidden  hover:text-white btn-sm hover:border-2 border-2 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold ">
        <ArrowUp size={20} weight="bold" />
        </div>
        {/* <div className="dropdown lg:hidden dropdown-left dropdown-bottom">
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
          </div> */}
      </div>
    </div>
  );
};

export default Footer;
