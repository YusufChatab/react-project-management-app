import ButtonCreate from "./ButtonCreate";
export default function ProjectSidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="font-bold mb-8 uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <div>
        <ButtonCreate>+ New Project</ButtonCreate>
      </div>
      <ul></ul>
    </aside>
  );
}
