///// index.js

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import { Projects } from "./pages/Projects";
import { Project } from "./pages/Project";
import { TaskDetails } from "./pages/TaskDetails";
import NoPage from "./pages/NoPage";

export default function MiApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Projects />} />
                    <Route path=":projectId" element={<Project />}>
                        <Route path=":taskId" element={<TaskDetails />} />
                    </Route>
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <MiApp />
    </React.StrictMode>
);