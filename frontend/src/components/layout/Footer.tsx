import { SocialIcons } from "../../data/socials";
import { ArrowUpToLine, Copyright } from "lucide-react";

import { Link } from "react-router";
import { menuItems } from "../../data/menu";
import "../../styles/footer.css"

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-main">
              <div className="footer-brand">
                
                <p className="footer-logo"> <Link to="/"> JP.DEV</Link></p>
                

                <p className="footer-description">Designing with purpose.<br />
                     Developing with intention.</p>
              </div>

                <ul className="footer-socials">
                    {SocialIcons.map((item) => {
                        const SocialIcon = item.icon;

                        return (
                        <li key={item.id}>
                            <a
                            href={item.href}
                            className="footer-social-link"
                            target="_blank"
                            >
                            <SocialIcon />
                            </a>
                        </li>
                        );
                    })}
                </ul>


              <nav
                className="footer-links"
                aria-label="Footer navigation"
              >
                <h2 className="footer-heading">Quick Links</h2>

                <ul className="footer-link-list">
                  <li>
                    <Link to="/home">Home</Link>
                  </li>

                  {menuItems.map((item) => (
                    <li key={item.id}>
                      {item.kind === "internal" ? (
                        <Link to={item.to}>{item.label}</Link>
                      ) : (
                        <a
                          href={item.href}
                          target={
                            item.openInNewTab
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            item.openInNewTab
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <button className="footer-back">Back_To_Top <ArrowUpToLine /> </button>
          </div>

        <div className="footer-bottom">
            <p className="footer-copyright">
                <Copyright
                className="footer-copyright-icon"
                size={12}
                strokeWidth={1.75}
                />
                <span>
                <span className="sr-only">Copyright </span>
                2026 John Paul Jacob. All rights reserved.
                </span>
            </p>

            <p className="footer-credit">
                Designed + developed by JP
            </p>
        </div>
        </footer>
    );
}