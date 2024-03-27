import { createContext } from "react";
import { useJobItemsContext, useLocalStorage } from "../lib/hooks";
import { TJobItem } from "../lib/types";

type BookmarksContextProviderType = {
    children: React.ReactNode;
};

type BookmarksContextType = {
    bookmarkedIds: number[];
    handleBookmarkClick: (jobId: number) => void;
    isJobBookmarked: (jobId: number) => boolean;
    bookmarkedJobItems: TJobItem[];
};

export const BookmarksContext = createContext<BookmarksContextType | null>(
    null
);

export default function BookmarksContextProvider({
    children,
}: BookmarksContextProviderType) {
    const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<number[]>(
        "bookmarkedIds",
        []
    );
    const { initialJobItems } = useJobItemsContext();

    const bookmarkedJobItems = initialJobItems.filter((job) =>
        bookmarkedIds.includes(job.id)
    );

    const handleBookmarkClick = (jobId: number) => {
        if (bookmarkedIds.includes(jobId)) {
            setBookmarkedIds((prev) => prev.filter((id) => id !== jobId));
        } else {
            setBookmarkedIds((prev) => [...prev, jobId]);
        }
    };

    const isJobBookmarked = (jobId: number) => bookmarkedIds.includes(jobId);

    return (
        <BookmarksContext.Provider
            value={{
                bookmarkedIds,
                handleBookmarkClick,
                isJobBookmarked,
                bookmarkedJobItems,
            }}
        >
            {children}
        </BookmarksContext.Provider>
    );
}
