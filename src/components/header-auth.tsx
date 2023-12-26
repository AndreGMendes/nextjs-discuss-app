"use client";

import Link from "next/link";

// imports regardins th UI
import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

import { useSession } from "next-auth/react";
import * as actions from "@/actions";

const HeaderAuth = () => {
  const session = useSession();

  session.data?.user
    ? console.log(
        `Signed in as ${session.data.user.name} from CLIENT Component`
      )
    : console.log(`Signed Out from CLIENT Component`);

  let authContent: React.ReactNode;

  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit" color="danger" variant="ghost">
                Sign Out
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="ghost">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button
              type="submit"
              color="primary"
              className="border  border-white hover:text-blue-700 hover:bg-white font-bold hover:underline"
            >
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );

  return authContent;
};

export default HeaderAuth;
