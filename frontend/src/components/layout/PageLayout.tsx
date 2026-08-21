import { Outlet } from "react-router";

import Header from "./Header";
import Footer from "./Footer";

import "../../styles/pagelayout.css"

export default function PageLayout() {
    return(
        <div id="top" className="page-layout">
        <main id="main-content"> 
        <Header />
            <Outlet/>
        <Footer />
        </main>
        </div>
    );
}

