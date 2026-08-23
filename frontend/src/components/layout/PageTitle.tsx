import { SectionInfos } from "../../data/sectionInfoData"; 

import "../../styles/pagetitle.css"

interface PageTitleProps {
    pageIndex: number;
}

export default function PageTitle({pageIndex}: PageTitleProps) {

    const currentSection = SectionInfos[pageIndex];
    return(
        <div className="title-container">
                    <div className="title-page-number">
                        <span>
                            0{currentSection.id}  / 
                        </span>
                            <div className="title-page-number-secondary">
                                {currentSection.nav}
                            </div>
                    </div>

                    <div className="title-page">
                        <h2>{currentSection.title}</h2>
                    </div>

                    <div className="title-page-description">
                        <p>{currentSection.description}</p>
                    </div>
        </div>
    );
}