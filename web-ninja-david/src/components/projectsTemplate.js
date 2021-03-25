import React from 'react';

function ProjectsTemplate(props) {
    //destructuring props so I don't have to use props every time I call a variable.
    const { title, link, imageLink, projectDescription, technologiesUsed, _id } = props;
  
  return (
    <div key={_id}>
        This is the Projects Template!
        <div>Project Title: {title}</div>
        <div>Project Link: {link}</div>
        {/*Trying to get image links to work with require() in the src, but links not quite functional*/}
        <div>Project Title: <img src={imageLink} alt={title}/></div>
        <div>Project Description: {projectDescription}</div>
        <div>Project Technologies Used: {technologiesUsed}</div>
    </div>
  );
}

export default ProjectsTemplate;