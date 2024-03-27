import JobItemContent from "../components/JobItemContent";
import Container from "../components/Container";
import BackButton from "../components/BackButton";

export default function JobPage() {
    return (
        <>
            <div className="relative container mx-auto mb-5">
                <BackButton />
            </div>
            <Container isFullHeight={true}>
                <JobItemContent />
            </Container>
        </>
    );
}
