import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <>
      <Separator />
      <footer className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-11">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Grow As Enginner</h3>
              <p>Providing innovative solutions since 2024</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Contact</h3>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@growasengineer.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+1 (0001) 0001-0001</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="hover:cursor-pointer">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:cursor-pointer">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:cursor-pointer">
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Follow Us</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook size={20} />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter size={20} />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={20} />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center">
            <p>
              &copy; {new Date().getFullYear()} Grow As Engineer. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
