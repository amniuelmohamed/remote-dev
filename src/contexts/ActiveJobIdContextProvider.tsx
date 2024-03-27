import { createContext, useEffect } from "react";
import { useJobItemsContext, useWrapperContext } from "../lib/hooks";

type ActiveJobIdContextProviderProps = {
    children: React.ReactNode;
};

type ActiveJobIdContextType = {
    activeJobId: number | null;
    setActiveJobId: React.Dispatch<React.SetStateAction<number | null>>;
};

export const ActiveJobIdContext = createContext<ActiveJobIdContextType | null>(
    null
);

export default function ActiveJobIdContextProvider({
    children,
}: ActiveJobIdContextProviderProps) {
    const { totalJobItems, jobItems } = useJobItemsContext();
    const { activeJobId, setActiveJobId } = useWrapperContext();

    useEffect(() => {
        if (totalJobItems > 0 && !activeJobId) {
            setActiveJobId(jobItems[0].id);
        }
        if (totalJobItems === 0) {
            setActiveJobId(null);
        }
    }, [jobItems, totalJobItems, activeJobId, setActiveJobId]);

    return (
        <ActiveJobIdContext.Provider value={{ activeJobId, setActiveJobId }}>
            {children}
        </ActiveJobIdContext.Provider>
    );
}
