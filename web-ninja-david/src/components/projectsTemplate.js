import React from 'react';

function ProjectsTemplate(props) {
    //destructuring props so I don't have to use props every time I call a variable.
    const { title, link, imageLink, projectDescription, technologiesUsed, _id } = props;
  
  return (
    <div key={_id}>
        <div>Project Title: {title}</div>
        <div>Project Link: {link}</div>
        <div>Project Image: <img src={imageLink} alt={title}/></div>
        <div>Project Description: {projectDescription}</div>
        <div>Project Technologies Used: {technologiesUsed}</div>
        <br/>
    </div>
  );
}

export default ProjectsTemplate;