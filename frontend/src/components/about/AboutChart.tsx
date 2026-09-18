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

                {filteredCharts.map((chart) => (
                    <div className="about-chart-row" key={chart.title}>

                        <h3 className="about-chart-title">
                            {chart.title}
                        </h3>

                        <div className="chart-bar-wrapper">
                            <span className="chart-level">
                                {scale[chart.level - 1]}
                            </span>

                            <div className="chart-bar">
                                {scale.map((_, index) => (
                                    <span
                                        key={index} 
                                        className={`chart-box ${
                                            index < chart.level ? 
                                            "filled" : ""
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}