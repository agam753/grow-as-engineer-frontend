"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import NavSearchBar from "./NavSearchBar";

const NavigationBar = () => {
  const navIconCss = "text-lg";
  return (
    <nav className="flex justify-between p-4 pl-8 pr-8 mb-6 border-b">
      <Button variant={"ghost"} className="text-xl font-bold">
        <Link href={"/"}>Grow As Engineer</Link>
      </Button>

      <div className="w-2/4">
        <NavSearchBar />
      </div>

      <ul className="flex justify-between w-1/4">
        <li>
          <Button className={navIconCss} asChild variant={"ghost"}>
            <Link href="/remote-jobs">Remote Jobs</Link>
          </Button>
        </li>
        <li>
          <Button className={navIconCss} asChild variant={"ghost"}>
            <Link href="/blogs">Blogs</Link>
          </Button>
        </li>
        <li>
          <Button className={navIconCss} asChild variant={"ghost"}>
            <Link href="/about">About</Link>
          </Button>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
