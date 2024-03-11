"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ModeToggle } from "./Themechangs";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <nav className="flex px-4 w-full py-3 fixed top-0 left-0 items-center border-stone-800 border-2 justify-between gap-4">
      <Sidebar isVisible={isVisible} />
      <div className="flex gap-2 items-center">
        <RxHamburgerMenu
          className="cursor-pointer text-lg"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        />
        <h1>Repelit</h1>
      </div>
      <Input className="w-2/5" />
      <div className="items-center flex gap-2">
        <ModeToggle />
        <Button>Signup</Button>
      </div>
    </nav>
  );
};

export default Navbar;
