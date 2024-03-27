import BookmarksButton from "./BookmarksButton";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className="relative mt-10 mb-10 px-4">
            <div className="flex justify-center items-center gap-5 mb-5">
                <Logo />
                <span className="h-5 w-[1px] bg-white/50"></span>
                <BookmarksButton />
            </div>
        </header>
    );
}
