// Components regarding 'NextUI'
import {
  Navbar,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Spacer,
  Textarea,
  autocomplete
} from "@nextui-org/react";

// Generic Components regarding 'NextJS' 
import Link from "next/link";

// Client Components
import HeaderAuth from "@/components/header-auth";
import Logo from "./Logo";
import { color } from "framer-motion";

export default function Header() {
  return (
    <div className="" >
      <Navbar className="mb-2 shadow p-4" shouldHideOnScroll id="header">
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
              size="sm" 
              // style={{ width: '100%' }}
              // description="Search for topics, posts or comments" 
              // placeholder="Search"
            />
            {/* <Spacer y={1} /> */}
           
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <HeaderAuth />
        </NavbarContent>
      </Navbar>
    </div>
  );
}
