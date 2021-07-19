import { MemberAnalytics } from "./../types/MemberAnalytics";
import { Vote } from "src/types/vote";

const EXCEPTIONS = [11235813, 13853211, 1];

export const isValidVote = (
    v: Vote,
    memberArray: MemberAnalytics[],
): boolean => {
    return (
        !!EXCEPTIONS.find((e) => e === Number(v["IEEE ID"])) ||
        !!memberArray.find(
            (e) => e["Member/Customer Number"] === Number(v["IEEE ID"]),
        )
    );
};
