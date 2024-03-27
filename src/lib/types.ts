export type TJobItem = {
    id: number;
    title: string;
    company: string;
    badgeLetters: string;
    relevanceScore: number;
    daysAgo: number;
};

export type TJobItemExtended = TJobItem & {
    description: string;
    location: string;
    salary: string;
    duration: string;
    qualifications: string[];
    reviews: string[];
    coverImgURL: string;
    companyURL: string;
};

export type TJobItemAPIResponse = {
    public: boolean;
    jobItem: TJobItemExtended | null;
};

export type TJobItemsAPIResponse = {
    public: boolean;
    sorted: boolean;
    jobItems: TJobItem[];
};
