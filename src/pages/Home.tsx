import Container from "../components/Container";
import JobItemContent from "../components/JobItemContent";
import SearchForm from "../components/SearchForm";
import Sidebar from "../components/Sidebar";

export default function Home() {
    return (
        <>
            <div className="relative container mx-auto mb-5 px-4">
                <SearchForm />
            </div>

            <Container>
                <div className="basis-full md:basis-1/3">
                    <Sidebar />
                </div>
                <div className="hidden md:block basis-2/3 md:flex-grow">
                    <JobItemContent />
                </div>
            </Container>
        </>
    );
}
