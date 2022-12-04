import React from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <Box p={{ base: 5, md: 10 }}>{children}</Box>
    </>
  );
}
