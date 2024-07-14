
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
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

  export default LinkPlatform