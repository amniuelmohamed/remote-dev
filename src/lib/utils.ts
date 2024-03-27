import toast from "react-hot-toast";
import { TJobItemAPIResponse, TJobItemsAPIResponse } from "./types";
import { BASE_API_URL } from "./constants";

export const handleError = (error: unknown) => {
    let message;

    if (error instanceof Error) {
        message = error.message;
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "An error occurred.";
    }

    toast.error(message);
};

export const fetchJobById = async (
    id: number | null
): Promise<TJobItemAPIResponse> => {
    if (!id) {
        return { public: true, jobItem: null };
    }
    const response = await fetch(BASE_API_URL + `/${id}`);
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.description || "Something went wrong!");
    }
    return response.json();
};

export const fetchJobs = async (
    searchText: string
): Promise<TJobItemsAPIResponse> => {
    const response = await fetch(
        BASE_API_URL + (searchText ? `?search=${searchText}` : "")
    );

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.description || "Something went wrong!");
    }
    return response.json();
};
