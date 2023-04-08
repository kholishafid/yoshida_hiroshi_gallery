"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center bg-base-100/50 h-20 px-8 z-50">
      <Link href={"/"} className="normal-case text-xl font-semibold">
        Hiroshi Yoshida 吉田 博 - Gallery
      </Link>
    </nav>
  );
};

export default Navbar;
