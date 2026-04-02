import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default AppRouter;
