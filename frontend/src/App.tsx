import { Route, Routes } from "react-router"

import PageLayout from "./components/layout/PageLayout"
import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout/>}>
        <Route index path="home" element={<HomePage/>}/>

        <Route path="projects" element={<ProjectsPage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="experience" element={<ExperiencePage/>}/>
        <Route path="contact" element={<ContactPage/>}/>
        
        <Route path="*" element={<ErrorPage/>}/>
      </Route>
    </Routes>
  );
}

export default App
