import Tasks from "./Tasks";

export default function SeletedProject({
  project,
  onDeleteProject,
  onAddTasks,
  onDeleteTasks,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-s-stone-300">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={onDeleteProject}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="text-stone-400 mb-4"> Due Date: {formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks tasks={tasks} onAdd={onAddTasks} onDelete={onDeleteTasks} />
    </div>
  );
}
