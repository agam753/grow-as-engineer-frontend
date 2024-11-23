"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full text-foreground py-6 mt-auto">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between text-center">
        <div className="md:text-left mt-4 md:mt-0">
          <p>Copyright © 2024 GrowAsEngineer</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
