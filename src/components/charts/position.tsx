import * as React from "react";
import { VoteTotal } from "src/types/vote";
import { Bar } from "react-chartjs-2";
import clsx from "clsx";

interface IPositionChartProps {
    data: VoteTotal;
}

const makeChartData = (data: VoteTotal) => ({
    labels: Object.keys(data.count),
    datasets: [
        {
            label: "# of Votes",
            data: Object.values(data.count),
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
        },
    ],
});
const options = {
    scales: {
        y: {
            beginAtZero: true,
            min: 0,
            max: 100,
        },
    },
};

const PositionChart: React.FunctionComponent<IPositionChartProps> = ({
    data,
}) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const resetedData = {
        ...data,
        count: Object.fromEntries(
            Object.entries(data.count).map(([a]) => [a, 0]),
        ),
    };
    const [animatedData, setAnimatedData] =
        React.useState<VoteTotal>(resetedData);

    React.useEffect(() => {
        return;
    }, [animatedData]);

    const chartData = makeChartData(animatedData);

    const weEnded = currentIndex === Object.keys(data.count).length;
    const revealNext = () => {
        if (weEnded) return;

        const newData = {
            ...animatedData,
            count: Object.fromEntries(
                Object.entries(animatedData.count).map(([a, b], index) =>
                    index === currentIndex
                        ? [a, Object.entries(data.count)[index][1]]
                        : [a, b],
                ),
            ),
        };

        setAnimatedData(newData);
        setCurrentIndex((e) => e + 1);
    };

    return (
        <div>
            <h2 className="mb-8 text-5xl font-bold text-center text-black text-opacity-80 ">
                {data.position}
            </h2>

            <button
                disabled={weEnded}
                onClick={revealNext}
                className={clsx(
                    weEnded ? "bg-blue-200 cursor-not-allowed " : "bg-blue-500",
                    "flex p-3 font-bold text-white rounded shadow ",
                )}
            >
                Reveal Next !
            </button>
            <Bar type="Bar" data={chartData} options={options} />
        </div>
    );
};

export default PositionChart;
