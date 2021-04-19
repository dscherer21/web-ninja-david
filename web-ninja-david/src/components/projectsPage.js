import React from 'react';
import projects from './projects';
import ProjectsTemplate from './projectsTemplate';

function ProjectsPage() {
  
  return (
    <main>
        <h1>Welcome to the Projects Page!</h1>
        {/*using the spread operator (...) to push all the project props into the projectsTemplate.*/}
        {projects.map((project) => (
          <ProjectsTemplate {...project} key={project._id}/>
        ))}
    </main>
  );
}

export default ProjectsPage;