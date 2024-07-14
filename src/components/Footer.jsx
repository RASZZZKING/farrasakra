import {
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
      <p>{name}</p>
      <ArrowUpRight size={20} className="mt-0.5" />
    </Link>
  );
  return (
    <div className="flex justify-center ">
      <div className="navbar justify-between px-0 border-b-2 border-b-slate-600 bg-base-100">
        <div className="">
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
      </div>
    </div>
  );
};

export default Footer;
