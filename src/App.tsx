import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Header from "./components/Header.tsx";

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />

          <Route path="/projects/:id" element={<ProjectDetailPage />} /> 
          <Route path="/contact" element={<ContactPage />} /> */}

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            {/* <Footer /> */}
        </>
    );
}

export default App;
