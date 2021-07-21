import { MemberAnalytics } from "./../types/MemberAnalytics";
import { Vote } from "src/types/vote";

// seperate arguments to better follow FP guidelines
export const isValidVote =
    (memberArray: MemberAnalytics[], exceptions: number[]) =>
    (v: Vote): boolean => {
        return (
            !!exceptions.find((e) => e === Number(v["IEEE ID"])) ||
            !!memberArray.find(
                (e) => e["Member/Customer Number"] === Number(v["IEEE ID"]),
            )
        );
    };
