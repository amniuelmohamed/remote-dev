import { createContext, useEffect, useState } from "react";
import type { TJobItem } from "../lib/types";
import {
    useSearchQuery,
    useSearchTextContext,
    useWrapperContext,
} from "../lib/hooks";
import { ITEMS_PER_PAGE } from "../lib/constants";

type JobItemsContextProviderProps = {
    children: React.ReactNode;
};

type JobItemsContextType = {
    initialJobItems: TJobItem[];
    jobItems: TJobItem[];
    totalJobItems: number;
    isLoading: boolean;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    sortBy: "recent" | "relevant";
    setSortBy: React.Dispatch<React.SetStateAction<"recent" | "relevant">>;
};

export const JobItemsContext = createContext<JobItemsContextType | null>(null);

export default function JobItemsContextProvider({
    children,
}: JobItemsContextProviderProps) {
    // state
    const { debouncedSearchText } = useSearchTextContext();
    const { jobItems, isLoading } = useSearchQuery(debouncedSearchText);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState<"recent" | "relevant">("relevant");

    // derived state
    const totalJobItems = jobItems?.length || 0;
    const sortedJobItems = [...jobItems].sort((a, b) => {
        if (sortBy === "recent") {
            return a.daysAgo - b.daysAgo;
        } else if (sortBy === "relevant") {
            return b.relevanceScore - a.relevanceScore;
        } else {
            return 0;
        }
    });
    const slicedJobItems = sortedJobItems.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // effects
    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearchText]);

    useEffect(() => {
        setCurrentPage(1);
    }, [sortBy]);

    const { activeJobId } = useWrapperContext();
    useEffect(() => {
        if (activeJobId && !debouncedSearchText) {
            const index = sortedJobItems.findIndex(
                (item) => item.id === activeJobId
            );
            if (index !== -1) {
                setCurrentPage(Math.ceil((index + 1) / ITEMS_PER_PAGE));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeJobId, debouncedSearchText, sortBy]);

    return (
        <JobItemsContext.Provider
            value={{
                initialJobItems: jobItems,
                jobItems: slicedJobItems,
                totalJobItems,
                isLoading,
                currentPage,
                setCurrentPage,
                sortBy,
                setSortBy,
            }}
        >
            {children}
        </JobItemsContext.Provider>
    );
}
