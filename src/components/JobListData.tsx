import { useJobItemsContext } from "../lib/hooks";
import JobsList from "./JobsList";

export default function JobListData() {
    const { jobItems, isLoading } = useJobItemsContext();
    return <JobsList jobItems={jobItems} isLoading={isLoading} />;
}
