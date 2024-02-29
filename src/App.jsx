import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar />
        <NoProjectSelected />
      </main>
    </>
  );
}

export default App;
