import { Outlet } from "react-router";

import Header from "./Header";

export default function PageLayout() {
    return(
        <div>
        <Header />
        <h1>Page Layout</h1>
        <Outlet/>
        </div>
    );
}

