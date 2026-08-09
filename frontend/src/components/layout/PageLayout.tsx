import { Outlet } from "react-router";

import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout() {
    return(
        <div id="top" className="page-layout">
        <Header />

        <main id="main-content"> 
            <Outlet/>
        </main>

        <Footer />
        </div>
    );
}

