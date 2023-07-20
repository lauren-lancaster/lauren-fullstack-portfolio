import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { Display } from '../../models/display'
import { useEffect } from 'react'
import * as displayActions from '../actions/display'

function Projects() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(displayActions.getProjectsThunk())
  }, [dispatch])

  const projects = useAppSelector((state) => state.display as Display[])

  return (
    <>
      <h3 id="projects-title">Projects</h3>
      {projects.map((project: Display, i: number) => {
        return (
          <>
            <div className="project" key={i}>
              <p className="project-name">{project.title}</p>
              <p className="project-school">{project.school}</p>
              <p className="project-group">{project.group}</p>
              <p className="project-complete">{project.complete}</p>
              <p className="project-description">{project.description}</p>
              <Link to={`/project/${project.id}`}>
                <button id="project-btn">Learn More</button>
              </Link>
            </div>
          </>
        )
      })}
    </>
  )
}

export default Projects
