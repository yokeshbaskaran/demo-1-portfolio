import React from 'react'
import "../styles/Projects.css";
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';

function Projects() {
  return (
    <div className='projects'>
      <h1>My Peronal Projects</h1>
      <div className='projectList'>
        {ProjectList.map( (project, indx) => {
          return <ProjectItem id={indx} name={project.name} image={project.image}/>
        })}
      </div>      
    </div>
  )
}

export default Projects