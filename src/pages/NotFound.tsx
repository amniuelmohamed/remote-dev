import BackButton from "../components/BackButton";

export default function NotFound() {
    return (
        <main className="relative h-[600px] sm:h-[580px] mt-52 container mx-auto px-4 text-center">
            <h1 className="text-3xl font-semibold mb-3">404 - Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <div className="w-fit mx-auto mt-10">
                <BackButton type="secondary" />
            </div>
        </main>
    );
}
