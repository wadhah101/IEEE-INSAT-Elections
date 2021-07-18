import { MemberAnalytics } from "./../types/MemberAnalytics";
import { Vote } from "src/types/vote";

export const isValidVote = (
    v: Vote,
    memberArray: MemberAnalytics[],
): boolean => {
    return !!memberArray.find(
        (e) => e["Member/Customer Number"] === Number(v["IEEE ID"]),
    );
};
