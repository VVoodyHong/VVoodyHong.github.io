import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }: Props) {
    const Fade = require('react-reveal/Fade');
    return (
        <Fade duration={800} bottom>
        <a className="project-card-main" href={project.url}>
            <div className="card-title">
                <p>{project.title}</p>
            </div>
            <div className="card-desc">
                <p>{project.descPeriod}</p>
            </div>
            <div className="card-desc">
                <p>{project.descPart}</p>
            </div>
        </a>
        </Fade>
    );
}
interface Props {
    project: {
        title: string,
        descPeriod: string,
        descPart: string,
        url: string
    }
}
export default ProjectCard;