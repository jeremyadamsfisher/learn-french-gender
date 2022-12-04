import { Box, Flex, useColorModeValue, HStack } from "@chakra-ui/react";
import Logo from "./Logo";
import { SignInSignOutButton } from "./SignInSignOutButton";
import ColorModeToggle from "./ColorModeToggle";

export default function NavBar() {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={"start"}>
          <Logo />
        </Flex>
        <HStack>
          <ColorModeToggle />
          <SignInSignOutButton />
        </HStack>
      </Flex>
    </Box>
  );
}
