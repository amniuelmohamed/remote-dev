import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarksContext } from "../lib/hooks";

type BookmarkIconProps = {
    jobId: number;
};

export default function BookmarkIcon({ jobId }: BookmarkIconProps) {
    const { handleBookmarkClick, isJobBookmarked } = useBookmarksContext();
    const isBookmarked = isJobBookmarked(jobId);

    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                handleBookmarkClick(jobId);
            }}
            aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
        >
            <BookmarkFilledIcon
                className={`w-5 h-5 ${
                    isBookmarked
                        ? "text-blue-500"
                        : "text-gray-300 hover:text-blue-500 transition duration-300"
                }`}
            />
        </button>
    );
}
