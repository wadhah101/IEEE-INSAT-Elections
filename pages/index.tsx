import React from "react";

import { Container, Header, Footer } from "@components";
import { GetStaticProps } from "next";
import { promises as fsp } from "fs";
import { VoteTotal } from "src/types/vote";
import PositionChart from "@components/charts/position";

interface HomeProps {
    data: VoteTotal[];
}

const Home: React.FC<HomeProps> = ({ data }) => {
    return (
        <Container>
            <Header />
            <div className="flex flex-col min-h-screen py-20">
                <div className="self-center md:w-7/12">
                    <PositionChart data={data[0]} />
                </div>
            </div>
            <Footer />
        </Container>
    );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const dataStr = await fsp.readFile("secrets/votes.json", "utf-8");

    return {
        props: {
            data: JSON.parse(dataStr),
        },
    };
};

export default Home;
