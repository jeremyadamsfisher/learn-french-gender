import api from "../lib/api";
import useSWR from "swr";

interface IFlashcard {
  french: string;
  english: string;
  gender: "m" | "f";
}

export function useFlashcard(uid?: number) {
  const {
    data: flashcard,
    error,
    mutate: resample,
  } = useSWR<IFlashcard>({ uid }, ({ key }) =>
    api.get(key ? `?user_id=${key}` : ``).json()
  );
  return { flashcard, error, resample };
}

export type { IFlashcard };
