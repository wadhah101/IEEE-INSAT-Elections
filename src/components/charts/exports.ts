import Selector from "./Selector";

import dynamic from "next/dynamic";

const Position = dynamic(() => import("./position"), { ssr: false });

export { Selector, Position };
