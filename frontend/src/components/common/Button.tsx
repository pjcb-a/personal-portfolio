import { Link } from "react-router"
import type { ButtonProps } from "../../types/button"

import "../../styles/common/button.css"

export default function Button({
    label,
    href, 
    variant = "primary",
    icon,
    external = false,
    download = false,
}: ButtonProps) {

    const className = `button button--${variant}`;
    
    if(external || download) {
        return (
            <a
              href={href}
              className={className}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              download={download || undefined}
            >
                <span>{label}</span>

                {icon && (
                    <span className="button-icon">{icon}</span>
                )}
            </a>
        );
    }

    return(
        <Link to={href} className={className}>
            <span>{label}</span>

            {icon && (
                <span className="button-icon">{icon}</span>
            )}
        </Link>
    );
}