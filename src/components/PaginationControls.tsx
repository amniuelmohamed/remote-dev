import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { ButtonHTMLAttributes } from "react";
import { useJobItemsContext } from "../lib/hooks";
import { ITEMS_PER_PAGE } from "../lib/constants";

export default function PaginationControls() {
    const { totalJobItems, currentPage, setCurrentPage } = useJobItemsContext();
    const totalPages = Math.ceil(totalJobItems / ITEMS_PER_PAGE);

    return (
        <div className="flex items-center justify-between h-[52px] py-3 px-3 md:px-2 lg:px-3">
            <div>
                {currentPage > 1 && (
                    <ButtonWrapper
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        <ArrowLeftIcon className="w-3 h-3" />
                        <span>Page {currentPage - 1}</span>
                    </ButtonWrapper>
                )}
            </div>
            <div>
                {currentPage < totalPages && (
                    <ButtonWrapper
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        <span className="text-sm">Page {currentPage + 1}</span>
                        <ArrowRightIcon className="w-3 h-3" />
                    </ButtonWrapper>
                )}
            </div>
        </div>
    );
}

type ButtonWrapperProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

function ButtonWrapper({ children, ...rest }: ButtonWrapperProps) {
    return (
        <button
            {...rest}
            className="flex items-center text-sm text-gray-500 gap-1 bg-gray-100 py-1 px-2 rounded-full shadow-sm hover:bg-gray-200 hover:text-gray-700 transition duration-300"
        >
            {children}
        </button>
    );
}
