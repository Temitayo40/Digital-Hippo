import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavItems from "./NavItems";
import Link from "next/link";
import { Icons } from "./Icons";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 -16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* TODO: MObile */}

              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;