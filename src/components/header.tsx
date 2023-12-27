import {
  Navbar,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";

import Link from "next/link";

// Client Component
import HeaderAuth from "@/components/header-auth";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="">
      <Navbar className="shadow " shouldHideOnScroll>
        <NavbarBrand>
          <Logo />
          <Link href={"/"} className="font-bold">
            Discuss
          </Link>
        </NavbarBrand>
        <NavbarContent justify="center">
          <NavbarItem>
            <Input
              label="Search"
              labelPlacement="inside"
              color="secondary"
              variant="flat"
              size="md" /*description="Search for topics, posts and comments" placeholder="Enter your email"*/
            />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <HeaderAuth />
        </NavbarContent>
      </Navbar>
    </div>
  );
}
