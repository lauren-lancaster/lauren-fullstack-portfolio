import * as displayActions from '../actions/display'
import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { Display } from '../../models/display'
import { useEffect } from 'react'

function Projects() {
  const projects = useAppSelector((state) => state.display as Display[])

  return (
    <>
      <h3>Projects</h3>
      {projects.map((project: Display, i: number) => {
        return (
          <>
            <div className="project" key={i}>
              <p className="project-school">{project.school}</p>
              <p className="project-group">{project.group}</p>
              <p className="project-complete">{project.complete}</p>
              <p className="project-name">{project.title}</p>
              <p className="project-description">{project.description}</p>
              <Link to={`/project/${project.id}`}>
                <button>Learn More</button>
              </Link>
            </div>
          </>
        )
      })}
    </>
  )
}

export default Projects
