import { Routes, Route } from "react-router-dom";
import Projects from "./Projects";
import AddNewProject from "./AddNewProject";

function ProjectsCollect() {
  return (
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="newProject" element={<AddNewProject />} />
    </Routes>
  );
}

export default ProjectsCollect;
