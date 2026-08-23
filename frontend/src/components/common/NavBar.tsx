import { Link, NavLink } from "react-router";
import { menuItems } from "../../data/menu";

import "../../styles/common/navbar.css"
import { ArrowUpRight } from "lucide-react";

export default function NavBar() {
    return(
        <nav className="navigation">
            <div className="navbar-logo">
                <Link to="/home"><span className="navbar-logo-highlight">jp</span>.dev</Link>
            </div>

           <ul className="navbar-links">
            {menuItems.map((item) => (
                <li key={item.id}>
                    {item.kind === "internal" ? (
                    <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        {item.label}
                    </NavLink>
                    ) : (
                    <a
                        href={item.href}
                        className="nav-link resume-link"
                        target={item.openInNewTab ? "_blank" : undefined}
                        rel={
                        item.openInNewTab
                            ? "noopener noreferrer"
                            : undefined
                        }
                    >
                        {item.label}
                        <span aria-hidden="true"> <ArrowUpRight size={16} /> </span>
                    </a>
                    )}
                </li>
                ))}
           </ul>
        </nav>
    );
}