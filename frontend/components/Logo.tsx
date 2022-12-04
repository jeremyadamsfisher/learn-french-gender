import {
  useColorModeValue,
  useBreakpointValue,
  HStack,
  Heading,
} from "@chakra-ui/react";

export default function Logo() {
  return (
    <HStack>
      <Heading
        fontWeight={"bold"}
        size={"md"}
        textAlign={useBreakpointValue({ base: "center", md: "left" })}
        fontFamily={"heading"}
        color={useColorModeValue("gray.800", "white")}
      >
        Learn French Genders
      </Heading>
    </HStack>
  );
}
