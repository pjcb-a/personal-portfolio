import Button from "./Button";

import { ArrowUpRight, Mail } from "lucide-react";

import "../../styles/common/cta.css"

export default function Cta() {
    return (
        <div className="cta-container">
            <div className="cta-content">
                <div className="cta-content-iconify">
                    <div className="cta-icon">
                    <Mail/>
                    </div>
                    <div className="cta-content-text">
                    <span>Have a Project or Internship Opportunity?</span>
                    <div className="cta-content-line"></div>
                    <span>Let's create something meaningful together.</span>
                    </div>
                </div>

            <Button 
            label="Contact Me"
            href="/contact"
            variant="outline"
            icon={<ArrowUpRight size={18} />}
            />
            </div>
        </div>
    );
}