import { TJobItem } from "../lib/types";
import JobListItem from "./JobListItem";
import LoadingSpinner from "./LoadingSpinner";

type JobsListProps = {
    jobItems: TJobItem[];
    isLoading?: boolean;
};

export default function JobsList({ jobItems, isLoading }: JobsListProps) {
    return (
        <ul className="h-full border-b border-t border-gray-100 overflow-hidden">
            {isLoading && (
                <div className="h-full flex items-center justify-center">
                    <LoadingSpinner />
                </div>
            )}
            {!isLoading && jobItems.length === 0 && (
                <li className="py-4 px-5 text-center text-gray-500">
                    No jobs found
                </li>
            )}
            {!isLoading &&
                jobItems.length > 0 &&
                jobItems.map((jobItem) => (
                    <JobListItem key={jobItem.id} jobItem={jobItem} />
                ))}
        </ul>
    );
}
