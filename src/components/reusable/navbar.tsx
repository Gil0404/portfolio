"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Icons from "@/app/img/gg.svg";
const navitem = [
  { name: "home", path: "#home" },
  { name: "about", path: "#about" },
  { name: "projects", path: "/projects" },
  { name: "resume", path: "/resume" },
];

export default function Navbar() {
  const currentpath = usePathname();
  const route = useRouter();
  const [navState, setnavState] = useState(false);
  function navClose() {
    setnavState(false);
  }
  function navOpen() {
    setnavState(true);
  }

  function router(e: {}) {}
  return (
    <>
      <div className=" fixed w-screen h-16 bg-high md:flex sm:hidden shadow-md p-10 z-50">
        <div className=" items-center flex max-w-normal mx-auto">
          <img src={Icons.src} alt="" className="w-10 h-10" />
        </div>
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
          } w-full h-10 justify-between px-3`}
        >
          <div className=" items-center flex max-w-normal  ">
            <img src={Icons.src} alt="" className="w-10 h-10" />
          </div>
          <button
            className={` h-10  ${
              navState ? "flex" : "hidden"
            } items-center px-4 text-xl`}
            onClick={navClose}
          >
            x
          </button>
          <button
            className={` h-10 ${
              !navState ? "flex" : "hidden"
            } items-center px-4`}
            onClick={navOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
            >
              <path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
            </svg>
          </button>
        </div>
        <div
          className={`px-10 flex-col  justify-center items-center animate-slidein active: md:hidden ${
            navState ? "sm:flex" : "sm:hidden"
          } bg-background w-screen max-w-normal h-full mx-auto gap-6`}
          onClick={navClose}
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
