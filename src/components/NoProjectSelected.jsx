import ButtonCreate from "./ButtonCreate";
import imageFile from "../assets/Nijika-taking-notes.png";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-48 h-48 object-contain mx-auto"
        src={imageFile}
        alt=""
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or Create a new one
      </p>
      <p className="mt-8">
        <ButtonCreate onClick={onStartAddProject}>
          Create New Project
        </ButtonCreate>
      </p>
    </div>
  );
}
