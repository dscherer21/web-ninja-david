import React from 'react';
import projects from './projects';
import ProjectsTemplate from './projectsTemplate';

function ProjectsPage() {
  
  return (
    <main>
        <div>This is the ProjectsPage body!</div>
        {projects.map((project, i) => (
          <ProjectsTemplate {...project}/>
        ))}
    </main>
  );
}

export default ProjectsPage;