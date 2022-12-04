import { Center, Spinner, SpinnerProps } from "@chakra-ui/react";

export default function CenterSpinner(props: SpinnerProps) {
  return (
    <Center h={"100vh"} w={"100%"}>
      <Spinner {...props} />
    </Center>
  );
}
