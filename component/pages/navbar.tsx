"use client";
import { Flex } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import Logo from "../logo";

export const Navbar = () => {
  return (
    <Flex w="100vw" bg="primaryBlurred" backdropFilter="blur(15px)">
      <Flex m={5} p="5">
        <Link href="/">
          <Logo />
        </Link>
      </Flex>

      <Flex m={5} p={5} justifyContent="space-between" alignItems="center">
        <Link mx={5} href="/isr">
          ISR
        </Link>
        <Link mx={5} href="/ssr">
          SSR
        </Link>
        <Link mx={5} href="/pageIsr">
          Page ISR
        </Link>
        <Link mx={5} href="/pageSsr">
          Page SSR
        </Link>
        <Link mx={5} href="/pageSsg">
          Page SSG
        </Link>
        <Link mx={5} href="/dynamicSSG/1">
          Dynamic SSG
        </Link>
        <Link mx={5} href="/dynamic/12">
          Dynamic SSR
        </Link>
        <Link mx={5} href="/catchAll/12">
          Dynamic catchAll
        </Link>
        <Link mx={5} href="/catchAll/12/sqdq/qsd">
          Dynamic catchAll 3lvl
        </Link>
      </Flex>
    </Flex>
  );
};
