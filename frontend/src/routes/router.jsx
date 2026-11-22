import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import ServicesPage from "../pages/Services.jsx";
import ProjectsPage from "../pages/Projects.jsx";
import ProjectDetails from "../pages/ProjectDetails.jsx";
import AboutPage from "../pages/About.jsx";
import ContactPage from "../pages/Contact.jsx";
import NotFound from "../pages/NotFound.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
