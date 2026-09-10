import { Route, Routes } from "react-router"

import PageLayout from "./components/layout/PageLayout"
import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

import { SpeedInsights } from "@vercel/speed-insights/react"

export default function App() {
  return (
    <div>     
    <SpeedInsights/>
      <Routes>
        <Route path="/" element={<PageLayout/>}>
          <Route index element={<HomePage/>}/>

          <Route path="projects" element={<ProjectsPage/>}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="experience" element={<ExperiencePage/>}/>
          <Route path="contact" element={<ContactPage/>}/>
          
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}