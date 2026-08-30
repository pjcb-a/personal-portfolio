import '../../styles/home/projectsection.css'

import { projects } from '../../data/projects';
import DevelopmentCard from '../projects/category/DevelopmentCard';
import CreativeMediaCard from '../projects/category/CreativeMediaCard';
import PosterCard from '../projects/category/PosterCard';

export default function ProjectSection() {


    return(
      <section className='selected-projects' data-motion-section>

        <header className='selected-projects-header' data-motion-item>
            <div className="selected-projects-heading">
                <div className="selected-projects-line">
                <h2>Featured_Projects</h2>
                <p>A selection of my designs and development projects.</p>
                </div>
            </div>

            <p className="selected-projects-index">/ 02</p>
        </header>

        <div className="selected-projects-list">
                <DevelopmentCard project={projects[0]}/>
                <CreativeMediaCard project={projects[1]}/>
                <PosterCard project={projects[2]}/>
        </div>

      </section>  
    );
}
