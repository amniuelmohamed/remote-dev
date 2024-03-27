import { TextAlignBottomIcon } from "@radix-ui/react-icons";
import { useJobItemsContext } from "../lib/hooks";
import { ButtonHTMLAttributes } from "react";

export default function SortingControls() {
    const { sortBy, setSortBy } = useJobItemsContext();

    return (
        <div className="flex items-center gap-1 h-[52px] justify-end">
            <TextAlignBottomIcon className="w-5 h-5 -mt-1 mr-1" />
            <SortingButton
                onClick={() => setSortBy("relevant")}
                isActive={sortBy === "relevant"}
            >
                Relevant
            </SortingButton>
            <SortingButton
                onClick={() => setSortBy("recent")}
                isActive={sortBy === "recent"}
            >
                Recent
            </SortingButton>
        </div>
    );
}

type SortingButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    isActive?: boolean;
};

function SortingButton({ children, isActive, ...rest }: SortingButtonProps) {
    return (
        <button
            {...rest}
            className={`uppercase bg-gray-100 py-1 px-2 rounded-md text-sm transition duration-300 ${
                isActive ? "text-white bg-gray-800" : "hover:bg-gray-200"
            }`}
        >
            {children}
        </button>
    );
}
