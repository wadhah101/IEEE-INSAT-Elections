import * as React from "react";
import { VoteTotal } from "src/types/vote";
import dynamic from "next/dynamic";

const Position = dynamic(() => import("./position"), { ssr: false });

interface ISelectorProps {
    data: VoteTotal[];
}

const Selector: React.FunctionComponent<ISelectorProps> = ({ data }) => {
    const [selected, setSelected] = React.useState("Chairman");
    const currentData = data.find((e) => e.position === selected);
    return (
        <div className="flex min-h-screen mx-20">
            <div className="self-center md:w-3/12">
                <ul className="flex flex-wrap">
                    {data.map((e) => (
                        <li key={e.position}>
                            <button
                                onClick={() => setSelected(e.position)}
                                className="flex p-3 m-1 font-bold text-white bg-red-500 rounded shadow "
                            >
                                {e.position}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-6 md:w-9/12">
                {data.map(
                    (e) =>
                        e.position === selected && (
                            <Position data={currentData} />
                        ),
                )}
            </div>
        </div>
    );
};

export default Selector;
