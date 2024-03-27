import { useContext, useEffect, useState } from "react";
import { JobItemsContext } from "../contexts/JobItemsContextProvider";
import { SearchTextContext } from "../contexts/SearchTextContextProvider";
import { useQuery } from "@tanstack/react-query";
import { fetchJobById, fetchJobs, handleError } from "./utils";
import { ActiveJobIdContext } from "../contexts/ActiveJobIdContextProvider";
import { WrapperContext } from "../contexts/WrapperContextProvider";
import { BookmarksContext } from "../contexts/BookmarksContextProvider";

// Jobs hooks
export const useJobItem = (id: number | null) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["job", id],
        queryFn: () => fetchJobById(id),
        staleTime: 1000 * 60 * 60, // 1 hour
        enabled: !!id,
        retry: false,
        refetchOnWindowFocus: false,
    });

    error && handleError(error);

    return {
        jobItem: data?.jobItem || null,
        isLoading,
    } as const;
};

export const useSearchQuery = (searchText: string) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["job-items", searchText],
        queryFn: () => fetchJobs(searchText),
        staleTime: 1000 * 60 * 60, // 1 hour
        retry: false,
        refetchOnWindowFocus: false,
    });

    error && handleError(error);

    return {
        jobItems: data?.jobItems || [],
        isLoading,
    } as const;
};

// Contexts
export const useJobItemsContext = () => {
    const context = useContext(JobItemsContext);
    if (!context) {
        throw new Error(
            "useJobItemsContext must be used within a JobItemsContextProvider"
        );
    }
    return context;
};

export const useSearchTextContext = () => {
    const context = useContext(SearchTextContext);
    if (!context) {
        throw new Error(
            "useSearchTextContext must be used within a SearchTextContextProvider"
        );
    }
    return context;
};

export const useActiveJobIdContext = () => {
    const context = useContext(ActiveJobIdContext);
    if (!context) {
        throw new Error(
            "useActiveJobIdContext must be used within a ActiveJobIdContextProvider"
        );
    }
    return context;
};

export const useWrapperContext = () => {
    const context = useContext(WrapperContext);
    if (!context) {
        throw new Error(
            "useWrapperContext must be used within a WrapperContextProvider"
        );
    }
    return context;
};

export const useBookmarksContext = () => {
    const context = useContext(BookmarksContext);
    if (!context) {
        throw new Error(
            "useBookmarksContext must be used within a BookmarksContextProvider"
        );
    }
    return context;
};

// Helpers
export const useDebounce = <T>(value: T, delay = 500): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [value, delay]);
    return debouncedValue;
};

export const useLocalStorage = <T>(key: string, initialValue: T) => {
    const [value, setValue] = useState<T>(() => {
        const savedValue = localStorage.getItem(key);
        return savedValue ? JSON.parse(savedValue) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue] as const;
};

export const useOnClickOutside = (
    refs: React.RefObject<HTMLElement>[],
    handler: () => void
) => {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                refs.every(
                    (ref) => !ref.current?.contains(event.target as Node)
                )
            ) {
                handler();
            }
        }

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [refs, handler]);
};
