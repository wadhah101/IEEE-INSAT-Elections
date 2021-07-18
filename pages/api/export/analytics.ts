import { NextApiRequest, NextApiResponse } from "next";
import fsp from "fs/promises";
import Papa from "papaparse";
import { MemberAnalytics } from "src/types/MemberAnalytics";

export default async (
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<void> => {
    const csvFile = await fsp.readFile("secrets/Member.csv", "utf-8");
    const result = Papa.parse<MemberAnalytics>(csvFile, {
        header: true,
        transform: (v, f) => (f === "Member/Customer Number" ? Number(v) : v),
    });

    await fsp.writeFile(
        "secrets/Member.json",
        JSON.stringify(result.data, null, 2),
    );
    res.status(200).json(result.errors);
};
