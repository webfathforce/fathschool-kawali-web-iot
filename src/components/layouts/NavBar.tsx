"use client";

import { Moon, Sun } from "@/resource/icons";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import React from "react";
import { useTheme } from "./Theme";
import Image from "next/image";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar classNames={{ base: "shadow border-b" }}>
        <NavbarBrand>
          <Image src="/logo.jpg" alt="logo" width={30} height={30} />
          <p className="ms-4 font-bold text-inherit">
            SMKN 1 Kawali
          </p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button isIconOnly variant="light" onPress={() => toggleTheme()}>
              {theme === "light" ? <Sun /> : <Moon />}
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default NavBar;
