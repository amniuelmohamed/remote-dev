import { createContext, useState } from "react";

type WrapperContextProviderProps = {
    children: React.ReactNode;
};

type WrapperContextType = {
    activeJobId: number | null;
    setActiveJobId: React.Dispatch<React.SetStateAction<number | null>>;
};

export const WrapperContext = createContext<WrapperContextType | null>(null);

export default function WrapperContextProvider({
    children,
}: WrapperContextProviderProps) {
    const [activeJobId, setActiveJobId] = useState<number | null>(null);

    return (
        <WrapperContext.Provider value={{ activeJobId, setActiveJobId }}>
            {children}
        </WrapperContext.Provider>
    );
}
