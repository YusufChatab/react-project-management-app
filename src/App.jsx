import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SeletedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  }

  function handleAddTasks(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTasks = {
        text: text,
        projectId: prevState.selectedProject,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTasks],
      };
    });
  }

  function handleDeleteTasks(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProject
        ),
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProject
  );

  let content = (
    <SeletedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      onAddTasks={handleAddTasks}
      onDeleteTasks={handleDeleteTasks}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProject === null) {
    content = (
      <NewProject onCancel={handleCancelAddProject} onAdd={handleAddProject} />
    );
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar
          onStartAddProject={handleStartAddProject}
          projects={projectsState.projects}
          onSelectProject={handleSelectProject}
          selectedProjectId={projectsState.selectedProject}
        />
        {content}
      </main>
    </>
  );
}

export default App;
