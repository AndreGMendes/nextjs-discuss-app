"use server";

import { Button, user } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

// Components from the Playground
import { SumComponent, MultiplyComponent } from "@/playground/playground";

export default async function Home() {
  const session = await auth();

  // let statusMessage;
  // if (session?.user) {
  //   (statusMessage = <div>Sign In!</div>);
  // } else {
  //   (statusMessage = <div>Signed Out</div>);
  // }

  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign In</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign Out!</Button>
      </form>
      <Profile />
      {session?.user ? (
        <div className="text-green-700">
          {JSON.stringify(`Signed in as ${session.user.name}`)}
          <i> (from SERVER Component)</i>
        </div>
      ) : (
        <div className="text-red-700">
          Signed Out <i>(from SERVER Component)</i>
        </div>
      )}
      {/* <SumComponent /> */}
      {/* <MultiplyComponent /> */}
    </div>
  );
}
