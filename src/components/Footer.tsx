export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="my-3 text-gray-500">
            <div className="container mx-auto px-2 flex items-center justify-between gap-2">
                <small>
                    &copy; {year} | Made with ❤️ by{" "}
                    <a
                        href="https://www.amniuel.dev"
                        target="_blank"
                        className="underline transition duration-300 hover:text-gray-700"
                    >
                        Amniuel.dev
                    </a>
                </small>
                <p className="text-right text-sm">
                    <span className="font-bold">109573</span> total jobs
                    available
                </p>
            </div>
        </footer>
    );
}
