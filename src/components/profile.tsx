"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Profile() {
  const session = useSession();

  // EXAMPLE: TypeScript function syntax
  const info = (name: string, email?: any): string => {
    return `${name} email is ${email}`;
  };

  // session.data?.user ? console.log(session) : console.log("Not Logged in");
  // session.data?.user
  //   ? console.log(
  //       `Signed in as ${session.data.user.name} from CLIENT Component`
  //     )
  //   : console.log(`Signed Out from CLIENT Component`);

  return (
    <div>
      {session.data?.user ? (
        <div className="text-green-700">
          <div>
            <Image
              className="rounded-full"
              src={`${session.data.user.image}`}
              width={100}
              height={100}
              alt="Profile Picture"
            />
            <h1 className="text-blue-700">
              {info(
                JSON.stringify(session.data.user.name),
                JSON.stringify(session.data.user.email)
              )}
            </h1>
          </div>
          {JSON.stringify(`Signed in as ${session.data.user.name}`)}
          <i> (from CLIENT Component)</i>
        </div>
      ) : (
        <div className="text-red-700">
          Signed Out <i>(from CLIENT Component)</i>
        </div>
      )}
    </div>
  );
}
