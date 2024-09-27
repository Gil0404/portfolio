"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navitem = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "project", path: "/project" },
  { name: "resume", path: "/resume" },
];
export default function Navbar() {
  const currentpath = usePathname();
  return (
    <>
      <div className=" fixed w-screen h-16 bg-white md:flex sm:hidden">
        <div className="px-10 justify-end items-center flex w-screen max-w-normal h-full bg-yellow-300 mx-auto gap-6">
          {navitem.map((links, index) => {
            return (
              <Link
                href={links.path}
                className={`${
                  links.path === currentpath &&
                  "text-main  border-main border-b-2"
                } hover:text-main  capitalize font-extrabold text-xl p-2`}
              >
                {links.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* mobile */}

      <div className=" fixed w-screen h-screen  md:hidden sm:flex">
        <div className="px-10 flex-col  justify-center items-center flex w-screen max-w-normal h-full mx-auto gap-6">
          {navitem.map((links, index) => {
            return (
              <Link
                href={links.path}
                className={`${
                  links.path === currentpath &&
                  "text-main  border-main border-b-2"
                } hover:text-main  capitalize font-extrabold text-xl p-2`}
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
