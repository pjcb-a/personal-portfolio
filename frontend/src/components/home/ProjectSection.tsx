import '../../styles/home/projectsection.css'

import { projects } from '../../data/projects';

import ProjectCard from '../projects/ProjectCard';

export default function ProjectSection() {
    const selectedProjects = projects.filter(
        (project) => project.featured
    );

    return(
      <section className='selected-projects' data-motion-section>

        <header className='selected-projects-header' data-motion-item>
            <div className="selected-projects-heading">
                <div className="selected-projects-line">
                <h2>Selected_Projects</h2>
                <p>A selection of my designs and development projects.</p>
                </div>
            </div>

            <p className="selected-projects-index">/ 02</p>
        </header>

        <div className="selected-projects-list">
            {selectedProjects.map((project, index) =>(
                <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                />
            ))}
        </div>

      </section>  
    );
}
