import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { Navbar } from "./navbar";
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      bg="primary"
      color="text.primary"
      w="100vw"
      minH="100vh"
      // overflow="auto"
      display="flex"
      flexDirection="column"
    >
      <Navbar />
      <Stack as="main" flex="1" w="100vw" h="100%" alignItems="center">
        {children}
      </Stack>
    </Box>
  );
};
