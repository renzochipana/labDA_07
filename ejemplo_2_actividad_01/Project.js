///// Projects.js
//// mostrara la lista de tareas 

import { Link, Outlet, useParams } from "react-router-dom";
const tasks = {
    project1: ["Task A", "Task B", "Task C"],
    project2: ["Task X", "Task Y", "Task Z"],
    project3: ["Task 1", "Task 2", "Task 3"]
};
export const Project = () => {
    const { projectId } = useParams();
    const projectTasks = tasks[projectId] || [];

    return (
        <div>
            <h2>Tasks in {projectId}</h2>
            <ul>
                {projectTasks.map((task, index) => (
                    <li key={index}>
                        <Link to={`${task}`}>{task}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
};