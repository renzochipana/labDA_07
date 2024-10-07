///// Projects.js
///// lista de proyectos

import { Link } from "react-router-dom";
export const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <ul>
                <li><Link to="project1">Project 1</Link></li>
                <li><Link to="project2">Project 2</Link></li>
                <li><Link to="project3">Project 3</Link></li>
            </ul>
        </div>
    );
};