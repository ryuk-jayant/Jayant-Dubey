import { Project_1, Project_2, Project_3 } from "./projectslist";

export default function Projects() {
  return (
    <div>
      <h1 className="text-red-500 text-center font-bold tracking-wide underline decoration-sky-400 text-3xl hover:tracking-widest hover:underline-offset-4">
        My creations
      </h1>
      <br />
      <div className="text-white grid lg:grid-cols-3 md:grid-cols-2 text-center gap-10">
        <Project_1 />
        <Project_2 />
        <Project_3 />
      </div>
    </div>
  );
}
