"use server";

import { Button, user } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

// Components from the Playground
import { SumComponent, MultiplyComponent } from "@/playground/playground";

export default async function Home() {
  const session = await auth();

  session?.user
    ? console.log(`Signed in as ${session.user.name} from SERVER Component`)
    : console.log(`Signed Out from SERVER Component`);

  return (
    <div>
      <Profile />
    </div>
  );
}
