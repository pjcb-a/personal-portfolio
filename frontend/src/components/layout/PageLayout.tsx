import { Outlet } from "react-router";

import "../../styles/pagelayout.css"

export default function PageLayout() {
    return(
        <main id="top" className="page-layout">
            <Outlet/>
        </main>
    );
}

