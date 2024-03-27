import { useJobItemsContext } from "../lib/hooks";

export default function ResultsCount() {
    const { totalJobItems } = useJobItemsContext();
    return (
        <div className="text-sm">
            <span className="font-bold">{totalJobItems}</span> results
        </div>
    );
}
