import { charts, scale } from "../../data/charts"; 

import "../../styles/about/about.css"

interface AboutChartProps {
    title: string;
}

export default function AboutChart({
    title
} : AboutChartProps) {

    const filteredCharts = charts.filter(
        (chart) => chart.label === title
    );

    return(
        <div className="about-chart-container">

            <div className="about-chart-header">
                <div className="about-box"></div>
                <h3>{title}</h3>
            </div>

            <div className="about-chart-content">

                <div className="about-chart-title">
                    {filteredCharts.map((chart) => (
                        <h3 className="chart-title"
                             key={chart.title}>
                                {chart.title}
                        </h3>
                    ))}
                </div>
                
                <div className="about-chart-bars">
                    {filteredCharts.map((chart) => (
                        <div className="chart-bar-wrapper"
                            key={chart.title}>
                                
                                <span className="chart-level">
                                    {scale[chart.level - 1]}
                                </span>

                                <div className="chart-bar">
                                    {scale.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`chart-box ${ index < chart.level 
                                                ? "filled"
                                                : ""
                                            }`}/>
                                    ))}
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}