import { isValidVote } from "./../../src/utils/votes.utils";
import { NextApiRequest, NextApiResponse } from "next";
import { promises as fsp } from "fs";
import Papa from "papaparse";
import { Vote } from "src/types/vote";
import { MemberAnalytics } from "src/types/MemberAnalytics";
import * as R from "ramda";

const POSITIONS = [
    "Chairman",
    "Vice-Chairwoman",
    "Human Resources Manager",
    "Treasurer",
    "Communication/Media Manager",
    "General Secretary",
    "WebMaster",
    "CS Chairwoman",
    "RAS Chairman",
    "PES Chairwoman",
    "IAS Chairman",
    "EMBS Chairwoman",
    "WIE Chairwoman",
];

const EXCEPTIONS = [11235813, 13853211, 1];

export default async (
    _req: NextApiRequest,
    res: NextApiResponse,
): Promise<void> => {
    const memberArrayStr = await fsp.readFile("secrets/Member.json", "utf-8");

    const memberArray: MemberAnalytics[] = JSON.parse(memberArrayStr);
    const csvFile = await fsp.readFile("secrets/votes.csv", "utf-8");
    const result = Papa.parse<Vote>(csvFile.trim(), {
        header: true,
    });

    // create validation functions
    const isValidVoteFunc = isValidVote(memberArray, EXCEPTIONS);
    const validVotes = result.data.filter((e) => isValidVoteFunc(e));
    console.log(`Valid Votes ${validVotes.length} / ${result.data.length}`);

    const output = POSITIONS.map((e) => {
        //  filter by identity may seem useless at first but it checks if the value is truthy
        const votes = validVotes.map((r) => r[e]).filter(R.identity);

        const count = Object.fromEntries(
            Object.entries(R.countBy<string>(R.identity)(votes)).sort(([a]) =>
                // putting no one as the first
                a === "No one" ? -1 : 0,
            ),
        );
        return { position: e, count };
    });

    await fsp.writeFile("data/votes.json", JSON.stringify(output, null, 2));

    res.status(200).json(output);
};
