import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Page/About";
import Resume from "./Page/Resume";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}
