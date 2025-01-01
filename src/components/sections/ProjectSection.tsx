import React from 'react';
import { Project } from '../../types'
import ProjectImage from './ProjectImage';
import ProjectContent from './ProjectContent';

interface ProjectSectionProps {
  project: Project;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ project }) => {
  return (
    <section id="projects" className="relative min-h-screen hidden sm:block">
      <ProjectImage src={project.image} alt={project.title} />
      <ProjectContent project={project} />
    </section>
  );
};

export default ProjectSection;