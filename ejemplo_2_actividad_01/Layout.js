///// Layout.js

import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Projects</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};
export default Layout;