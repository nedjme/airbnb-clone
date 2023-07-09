"use client";

import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

export const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  console.log("🚀 ~ file: Navbar.tsx:13 ~ currentUser:", currentUser);
  return (
    <div className="shadow-sm fixed w-full z-10 bg-white">
      <div className="p-2 border-b-2">
        <Container>
          <div className="flex items-center justify-between flex-row gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
