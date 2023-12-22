// "use client";

import { Button } from "@nextui-org/react";

export default function Home() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      {/* <Button onClick={handleClick}>Click me!</Button> */}
      <Button>Click me!</Button>
    </div>
  );
}
