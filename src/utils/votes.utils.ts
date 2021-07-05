import { Vote } from "src/types/vote";

export const isValidVote = (e: Vote): boolean => {
    return !!e;
};
