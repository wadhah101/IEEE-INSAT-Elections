import React from "react";

import { Logo } from "@components";

export const Header: React.FC = () => {
    return (
        <div className="pt-4 pb-2 text-center bg-gray-800">
            <Logo />
        </div>
    );
};
