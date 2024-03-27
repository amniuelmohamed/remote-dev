import { forwardRef } from "react";
import { useBookmarksContext, useJobItemsContext } from "../lib/hooks";
import JobsList from "./JobsList";
import { createPortal } from "react-dom";

const BookmarksPopover = forwardRef<HTMLDivElement>(function (_, ref) {
    const { bookmarkedJobItems } = useBookmarksContext();
    const { isLoading } = useJobItemsContext();

    return createPortal(
        <section
            ref={ref}
            className={`absolute left-1/2 top-[85px] -translate-x-1/2 w-full max-w-[400px] ${
                isLoading ? "h-[180px]" : "min-h-[180px]"
            } bg-white rounded-lg shadow overflow-hidden`}
        >
            <JobsList jobItems={bookmarkedJobItems} isLoading={isLoading} />
        </section>,
        document.body
    );
});

export default BookmarksPopover;
