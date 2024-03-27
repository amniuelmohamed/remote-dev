import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { useActiveJobIdContext } from "../lib/hooks";

type BackButtonProps = {
    type?: "secondary" | "primary";
};

export default function BackButton({ type }: BackButtonProps) {
    const { activeJobId } = useActiveJobIdContext();
    return (
        <Link
            to={activeJobId ? `/${activeJobId}` : "/"}
            className={`flex items-center mt-20 text-white hover:text-gray-200 transition-colors duration-300 ease-in-out ${
                type === "secondary" && "bg-primary py-1 pl-1 pr-2 rounded-md"
            }`}
        >
            <ChevronLeftIcon className="w-5 h-5" />
            <span>Back to search</span>
        </Link>
    );
}
