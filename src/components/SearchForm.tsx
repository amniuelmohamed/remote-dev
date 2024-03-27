import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useSearchTextContext } from "../lib/hooks";

export default function SearchForm() {
    const { searchText, setSearchText } = useSearchTextContext();
    return (
        <form className="mb-10 w-full max-w-[500px] mx-auto flex bg-white rounded-[4px] focus-within:outline focus-within:outline-white/50">
            <button type="submit" className="py-4 pl-4 md:pl-5 pr-2">
                <MagnifyingGlassIcon width={22} height={22} />
            </button>
            <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                required
                spellCheck="false"
                placeholder="Find remote developer jobs..."
                className="flex-grow bg-transparent py-4 pr-2 outline-none focus:outline-none placeholder:text-gray-500"
            />
        </form>
    );
}
