import JobListData from "./JobListData";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";

export default function Sidebar() {
    return (
        <aside className="flex flex-col">
            <div className="flex items-center justify-between h-[52px] py-3 px-3 md:px-2 lg:px-3">
                <ResultsCount />
                <SortingControls />
            </div>
            <div className="h-[540px]">
                <JobListData />
            </div>
            <PaginationControls />
        </aside>
    );
}
