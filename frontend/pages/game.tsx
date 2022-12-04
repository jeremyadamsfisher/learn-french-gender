import { Alert, AlertIcon, AlertTitle, Center } from "@chakra-ui/react";
import React from "react";
import { useFlashcard } from "../models/flashcards";
import { FrontFlashcard } from "../components/FrontFlashcard";
import CenterSpinner from "../components/CenterSpinner";

export default function Game() {
  const { flashcard, error, resample } = useFlashcard();

  if (error) {
    return (
      <Alert status={"error"} rounded={"lg"}>
        <AlertIcon />
        <AlertTitle>{error.toString()}</AlertTitle>
      </Alert>
    );
  }

  if (!flashcard) {
    return <CenterSpinner />;
  }

  return (
    <Center h={"80vh"}>
      <FrontFlashcard flashcard={flashcard} resampleCallback={resample} />
    </Center>
  );
}
