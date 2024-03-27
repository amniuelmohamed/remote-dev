import { TriangleDownIcon } from "@radix-ui/react-icons";
import BookmarksPopover from "./BookmarksPopover";
import { useRef, useState } from "react";
import { useOnClickOutside } from "../lib/hooks";

export default function BookmarksButton() {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const bookmarksButtonRef = useRef<HTMLButtonElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    useOnClickOutside([bookmarksButtonRef, popoverRef], () =>
        setIsPopoverOpen(false)
    );

    return (
        <>
            <button
                ref={bookmarksButtonRef}
                className="flex items-center gap-1 text-white text-sm"
                onClick={() => setIsPopoverOpen((prev) => !prev)}
            >
                bookmarks <TriangleDownIcon />
            </button>
            {isPopoverOpen && <BookmarksPopover ref={popoverRef} />}
        </>
    );
}
