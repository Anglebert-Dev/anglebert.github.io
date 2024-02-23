import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Page/About";
import Resume from "./Page/Resume";
import ProjectPage from "./Page/ProjectPage";
import Contact from "./Page/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
