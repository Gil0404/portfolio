"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navitem = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "projects", path: "/projects" },
  { name: "resume", path: "/resume" },
];

export default function Navbar() {
  const currentpath = usePathname();
  const [navState, setnavState] = useState(false);
  function navClose() {
    setnavState(false);
  }
  function navOpen() {
    setnavState(true);
  }
  return (
    <>
      <div className=" fixed w-screen h-16 bg-high md:flex sm:hidden shadow-md z-50">
        <div className="px-10 justify-end items-center flex w-screen max-w-normal h-full bg-high mx-auto gap-6">
          {navitem.map((links, index) => {
            return (
              <Link
                key={index}
                href={links.path}
                className={`${
                  links.path === currentpath &&
                  "text-dark    border-dark  border-b-2  "
                } hover:text-dark hover:underline-offset-8  capitalize font-extrabold text-xl p-2 text-background`}
              >
                {links.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* mobile */}

      <div className=" fixed w-screen h-screen flex-col md:hidden z-50">
        <div
          className={`flex ${
            !navState ? "bg-high" : "bg-background"
          } w-full h-10 justify-end`}
        >
          <button
            className={`w-10 h-10 bg-yellow-300 ${
              navState ? "flex" : "hidden"
            }`}
            onClick={navClose}
          >
            x
          </button>
          <button
            className={`w-10 h-10 bg-yellow-300 ${
              !navState ? "flex" : "hidden"
            }`}
            onClick={navOpen}
          >
            y
          </button>
        </div>
        <div
          className={`px-10 flex-col  justify-center items-center md:hidden ${
            navState ? "sm:flex" : "sm:hidden"
          } bg-background w-screen max-w-normal h-full mx-auto gap-6`}
        >
          {navitem.map((links, index) => {
            return (
              <Link
                key={index}
                href={links.path}
                className={`${
                  links.path === currentpath &&
                  "text-high  border-high border-b-2"
                } hover:text-high  capitalize font-extrabold text-xl p-2`}
              >
                {links.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
