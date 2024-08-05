import React from "react";
import * as Popover from "@radix-ui/react-popover";
import Link from "next/link";
import { Flex, Text, Button } from "@radix-ui/themes";

export default function Header() {
  return (
    <>
      <nav className="p-4 m-2s">
        <Link href={"/"} className="p-4 m-4 border-2">
          Home
        </Link>
        <Link href={"/userinputtest"} className="p-4 m-2 border-2">
          Testing Forms
        </Link>

        <Flex direction="column" gap="2">
          <Text>Hello </Text>
          <Button>Let's go</Button>
        </Flex>
      </nav>
    </>
  );
}
