import React from "react";

import { Container, Header, Footer } from "@components";
import { GetStaticProps } from "next";
import { promises as fsp } from "fs";
import { VoteTotal } from "src/types/vote";
import * as MyCharts from "@components/charts/exports";
import Head from "next/head";

interface HomeProps {
    data: VoteTotal[];
}

const Home: React.FC<HomeProps> = ({ data }) => {
    return (
        <Container>
            <Head>
                <title> IEEE 2021 elections result </title>
            </Head>

            <Header />
            <MyCharts.Selector data={data} />
            <Footer />
        </Container>
    );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const dataStr = await fsp.readFile("data/votes.json", "utf-8");

    return {
        props: {
            data: JSON.parse(dataStr),
        },
    };
};

export default Home;
