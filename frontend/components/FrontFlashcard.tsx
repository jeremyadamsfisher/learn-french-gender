import {
  Center,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import type { IFlashcard } from "../models/flashcards";

function useRightOrWrongCallback(
  word: string,
  gender: "m" | "f",
  correct: boolean,
  setShowingAnswer: (showingAnswer: boolean) => void,
  resampleCallback: () => void
) {
  const toast = useToast();
  return useCallback(() => {
    setShowingAnswer(true);
    toast({
      title: correct ? "Correct" : "Incorrect",
      description:
        gender === "m" ? `${word} is masculine.` : `${word} is feminine.`,
      status: correct ? "success" : "error",
      duration: 1000,
      isClosable: true,
    });
    setTimeout(() => {
      resampleCallback();
      setShowingAnswer(false);
    }, 1000);
  }, [toast, word, gender, correct, resampleCallback, setShowingAnswer]);
}

export function FrontFlashcard({
  flashcard,
  resampleCallback,
}: {
  flashcard: IFlashcard;
  resampleCallback: () => void;
}) {
  const [showingAnswer, setShowingAnswer] = useState<boolean>(false);
  const correct = useRightOrWrongCallback(
    flashcard.french,
    flashcard.gender,
    true,
    setShowingAnswer,
    resampleCallback
  );
  const incorrect = useRightOrWrongCallback(
    flashcard.french,
    flashcard.gender,
    false,
    setShowingAnswer,
    resampleCallback
  );
  return (
    <Box borderWidth={1} rounded={"lg"} shadow={"md"}>
      <Flex direction={"column"} alignItems="center" w={250} h={150} p={25}>
        <Box h={"90%"}>
          {flashcard.french} ({flashcard.english})
        </Box>
        <Spacer />
        <ButtonGroup>
          <Button
            onClick={flashcard.gender === "m" ? correct : incorrect}
            disabled={showingAnswer}
          >
            Masculine
          </Button>
          <Button
            onClick={flashcard.gender === "f" ? correct : incorrect}
            disabled={showingAnswer}
          >
            Feminine
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
