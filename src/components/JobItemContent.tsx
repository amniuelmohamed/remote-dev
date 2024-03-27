import { ClockIcon, IdCardIcon, SewingPinIcon } from "@radix-ui/react-icons";
import { useParams } from "react-router-dom";
import { useActiveJobIdContext, useJobItem } from "../lib/hooks";
import LoadingSpinner from "./LoadingSpinner";
import { useEffect } from "react";
import BookmarkIcon from "./BookmarkIcon";

export default function JobItemContent() {
    const { id } = useParams();
    const { activeJobId, setActiveJobId } = useActiveJobIdContext();
    const { jobItem, isLoading } = useJobItem(Number(id) || activeJobId);

    useEffect(() => {
        if (id) {
            setActiveJobId(Number(id));
        }
    }, [activeJobId, id, setActiveJobId]);

    return (
        <article className="relative bg-gray-100 h-full min-h-[644px] pb-3 w-full overflow-y-auto">
            {isLoading && (
                <div className="min-h-[644px] flex items-center justify-center">
                    <LoadingSpinner />
                </div>
            )}

            {!isLoading && jobItem && (
                <>
                    <div className="absolute top-0 left-0 w-full h-[200px] overflow-hidden">
                        <img
                            src={jobItem.coverImgURL}
                            alt="job image"
                            className="object-cover object-center w-full h-full filter brightness-50"
                        />
                    </div>
                    <button className="absolute z-10 top-5 right-5 bg-primary text-white px-3 py-1 rounded-md text-sm uppercase font-medium hover:bg-blue-700 transition duration-300">
                        Apply
                    </button>
                    <div className="relative px-10 pt-[140px]">
                        <div className="flex gap-4">
                            <div>
                                <div className="px-4 py-5 bg-yellow-400 text-2xl font-bold rounded-md">
                                    {jobItem.badgeLetters}
                                </div>
                                <div className="flex justify-between items-center gap-3 mt-3">
                                    <span className="text-sm text-gray-500 font-medium">
                                        {jobItem.daysAgo}d
                                    </span>
                                    <BookmarkIcon jobId={jobItem.id} />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-xl sm:text-2xl font-semibold text-white capitalize">
                                    {jobItem.title}
                                </h1>
                                <a
                                    href={jobItem.companyURL}
                                    target="_blank"
                                    className="text-white/75 italic capitalize leading-none"
                                >
                                    {jobItem.company}
                                </a>
                                <p className="mt-5">{jobItem.description}</p>
                                <ul className="flex items-center flex-wrap gap-x-6 gap-y-2 mt-3">
                                    <li className="flex items-center gap-1">
                                        <span className="bg-gray-200 rounded-full p-2">
                                            <ClockIcon className="w-3 h-3 text-gray-500 font-bold" />
                                        </span>
                                        {jobItem.duration}
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <span className="bg-gray-200 rounded-full p-2">
                                            <IdCardIcon className="w-3 h-3 text-gray-500 font-bold" />
                                        </span>
                                        {jobItem.salary}
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <span className="bg-gray-200 rounded-full p-2">
                                            <SewingPinIcon className="w-3 h-3 text-gray-500 font-bold" />
                                        </span>
                                        {jobItem.location}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-10 flex gap-5 items-start">
                            <div className="basis-1/3">
                                <h2 className="text-lg font-bold">
                                    Qualifications
                                </h2>
                                <p className="text-gray-700">
                                    Other qualifications may apply
                                </p>
                            </div>
                            <ul className="basis-2/3 flex items-center flex-wrap gap-3 mt-1">
                                {jobItem.qualifications.map(
                                    (qualification, index) => (
                                        <li
                                            key={index}
                                            className="py-1 px-2 bg-gray-200 text-gray-700 rounded-sm"
                                        >
                                            {qualification}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                        <div className="mt-8 flex gap-5 items-start">
                            <div className="basis-1/3">
                                <h2 className="text-lg font-bold">
                                    Company Reviews
                                </h2>
                                <p className="text-gray-700">
                                    Recent things people are saying
                                </p>
                            </div>
                            <ul className="basis-2/3 flex items-center flex-wrap gap-3">
                                {jobItem.reviews.map((review, index) => (
                                    <li
                                        key={index}
                                        className="italic text-gray-700"
                                    >
                                        {review}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <hr className="mt-8 mb-3" />
                        <p className="text-sm italic text-gray-700">
                            If possible, please reference that you found the job
                            on <span className="font-bold">RemoteDev</span>. We
                            would really appreciate it !
                        </p>
                    </div>
                </>
            )}
        </article>
    );
}
