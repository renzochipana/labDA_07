///// TaskDetails.js
///// detalles de tareas

import { useParams } from "react-router-dom";
export const TaskDetails = () => {
    const { taskId } = useParams();

    return (
        <div>
            <h3>Details of task: {taskId}</h3>
            <p>This is the description for task {taskId}.</p>
        </div>
    );
};
