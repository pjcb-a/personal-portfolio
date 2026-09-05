import { projects } from "../../data/projects";

export default function AboutEdu() {
    const totalProjects = projects.length;
    return(
        <section className="about-educ-container">
            <div className="educ-data">
                <h2>{totalProjects}</h2>
                <span>Projects Completed</span>
            </div>

            <div className="educ-data">
                <h2>3+</h2>
                <span>Years of Learning</span>
            </div>

            <div className="educ-data">
                <h2>12+</h2>
                <span>Tools & Technologies</span>
            </div>

            <div className="educ-data">
                <h2>100%</h2>
                <span>Passion for Improvement</span>
            </div>
        </section>
    );
}