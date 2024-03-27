import { Link, useNavigate } from "react-router-dom";
import type { TJobItem } from "../lib/types";
import { useActiveJobIdContext } from "../lib/hooks";
import BookmarkIcon from "./BookmarkIcon";

type JobListItemProps = {
    jobItem: TJobItem;
};

export default function JobListItem({ jobItem }: JobListItemProps) {
    const { id, title, company, daysAgo, badgeLetters } = jobItem;
    const navigate = useNavigate();

    const { activeJobId, setActiveJobId } = useActiveJobIdContext();

    const handleJobItemClick = () => {
        if (window.innerWidth < 768) {
            navigate(`/job/${id}`);
        } else {
            setActiveJobId(id);
            navigate(`/${id}`);
        }
    };

    return (
        <li
            className={`flex items-center gap-5 h-[90px] py-4 px-5  border-b border-gray-50 last:border-b-0 transition cursor-pointer ${
                activeJobId === id
                    ? "bg-gray-100 hover:bg-gray-100"
                    : "bg-white hover:bg-gray-50"
            }`}
            onClick={handleJobItemClick}
        >
            <div className="h-[52px] w-[52px] flex items-center justify-center bg-gray-300  font-bold rounded-md">
                {badgeLetters}
            </div>
            <div className="flex-grow">
                <Link
                    to={`/job/${id}`}
                    className="block w-fit hover:underline"
                    onClick={(e) => e.stopPropagation()}
                >
                    <h3 className="text-lg font-semibold leading-none">
                        {title}
                    </h3>
                </Link>
                <p className="text-gray-500 italic leading-none">{company}</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <BookmarkIcon jobId={id} />
                <span className="text-gray-500 text-sm">{daysAgo}d</span>
            </div>
        </li>
    );
}
