import { Button } from '@nextui-org/react';

// ADDED
import * as actions from "@/actions";

export default function Home() {
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
}
