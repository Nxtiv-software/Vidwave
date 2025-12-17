import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ProjectsLayout from "./layout/ProjectsLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/projects" element={<ProjectsLayout />} />
    </Routes>
  );
}

export default App;
