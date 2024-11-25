"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full text-foreground py-6 mx-6 md:mx-20 mt-auto">
      <div className="container flex flex-col-reverse md:flex-row justify-between text-sm md:text-md">
        <div className="md:text-left mt-4 md:mt-0 border-b border-foreground pb-1 w-fit">
          <p>
            Copyright © 2024
            <span className="hidden md:inline-block">GrowAsEngineer</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href="/about"
            className="hover:cursor-pointer border-b border-foreground pb-1 w-fit"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:cursor-pointer border-b border-foreground pb-1 w-fit"
          >
            Contact Us
          </Link>
          <Link
            href="/privacy-policy"
            className="hover:cursor-pointer border-b border-foreground pb-1 w-fit"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
