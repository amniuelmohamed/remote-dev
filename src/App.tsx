import { BrowserRouter, Route, Routes } from "react-router-dom";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import JobPage from "./pages/JobPage";
import NotFound from "./pages/NotFound";
import JobItemsContextProvider from "./contexts/JobItemsContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchTextContextProvider from "./contexts/SearchTextContextProvider";
import ActiveJobIdContextProvider from "./contexts/ActiveJobIdContextProvider";
import { Toaster } from "react-hot-toast";
import WrapperContextProvider from "./contexts/WrapperContextProvider";
import BookmarksContextProvider from "./contexts/BookmarksContextProvider";

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <Background />

            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <WrapperContextProvider>
                        <SearchTextContextProvider>
                            <JobItemsContextProvider>
                                <ActiveJobIdContextProvider>
                                    <BookmarksContextProvider>
                                        <Header />
                                        <Routes>
                                            <Route path="/" Component={Home} />
                                            <Route
                                                path="/:id"
                                                Component={Home}
                                            />
                                            <Route
                                                path="/job/:id"
                                                Component={JobPage}
                                            />
                                            <Route
                                                path="*"
                                                Component={NotFound}
                                            />
                                        </Routes>
                                    </BookmarksContextProvider>
                                </ActiveJobIdContextProvider>
                            </JobItemsContextProvider>
                        </SearchTextContextProvider>
                    </WrapperContextProvider>
                </QueryClientProvider>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
