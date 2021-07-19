import { isValidVote } from "./../../src/utils/votes.utils";
import { NextApiRequest, NextApiResponse } from "next";
import { promises as fsp } from "fs";
import Papa from "papaparse";
import { Vote } from "src/types/vote";
import { MemberAnalytics } from "src/types/MemberAnalytics";
import * as R from "ramda";

const positions = [
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

export default async (
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<void> => {
    const memberArrayStr = await fsp.readFile("secrets/Member.json", "utf-8");

    const memberArray: MemberAnalytics[] = JSON.parse(memberArrayStr);
    const csvFile = await fsp.readFile("secrets/votes.csv", "utf-8");
    const result = Papa.parse<Vote>(csvFile.trim(), {
        header: true,
    });

    const validVotes = result.data.filter((e) => isValidVote(e, memberArray));

    console.log(`Valid Votes ${validVotes.length} / ${result.data.length}`);

    const output = positions.map((e) => {
        const votes = validVotes.map((r) => r[e]).filter(R.identity);

        const count = Object.fromEntries(
            Object.entries(R.countBy<string>(R.identity)(votes)).sort(([a]) =>
                a === "No one" ? -1 : 0,
            ),
        );
        return { position: e, count };
    });

    await fsp.writeFile("secrets/votes.json", JSON.stringify(output, null, 2));

    res.status(200).json(output);
};
