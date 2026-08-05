import NavBar from "../common/NavBar";

import "../../styles/header.css"

export default function Header() {
    return (
        <header className="site-header">
            <p className="header-data header-location">BASED IN THE PHILIPPINES</p>

            <NavBar/>

            <p className="header-data header-year">PORTFOLIO / 2026</p>
        </header>
    );
}
