export interface Vote {
    Timestamp: string;
    "IEEE ID"?: string;
    Chairman?: string;
    "Vice-Chairwoman"?: string;
    "Human Resources Manager"?: string;
    Treasurer?: string;
    "Communication/Media Manager"?: string;
    "General Secretary"?: string;
    WebMaster?: string;
    "CS Chairwoman"?: string;
    "RAS Chairman"?: string;
    "PES Chairwoman"?: string;
    "IAS Chairman"?: string;
    "EMBS Chairwoman"?: string;
    "WIE Chairwoman"?: string;
}

export interface VoteTotal {
    position: string;
    count: Record<string, number>;
}
