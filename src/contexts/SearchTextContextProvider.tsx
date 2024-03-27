import { createContext, useState } from "react";
import { useDebounce } from "../lib/hooks";

type SearchTextContextProviderProps = {
    children: React.ReactNode;
};

type SearchTextContextType = {
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    debouncedSearchText: string;
};

export const SearchTextContext = createContext<SearchTextContextType | null>(
    null
);

export default function SearchTextContextProvider({
    children,
}: SearchTextContextProviderProps) {
    const [searchText, setSearchText] = useState("");
    const debouncedSearchText = useDebounce(searchText, 300);

    return (
        <SearchTextContext.Provider
            value={{ searchText, setSearchText, debouncedSearchText }}
        >
            {children}
        </SearchTextContext.Provider>
    );
}
