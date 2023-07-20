import * as displayActions from '../actions/display'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { Display } from '../../models/display'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Nav from './Nav'

function Project() {
  const dispatch = useAppDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(displayActions.getOneProjectThunk(Number(id)))
  }, [dispatch, id])

  const projectArray = useAppSelector((state) => state.display as Display[])
  const project = projectArray[0]
  return (
    <>
      <div className="page-nav">
        <Nav />
      </div>
      <div className="home-container">
        <div className="page-header">
          <h1 id="page-title">{project.title}</h1>
          <h2 id="page-school">{project.school}</h2>
          <h3>{project.group}</h3>
          <h4>{project.complete}</h4>
          <h5>{project.created_at}</h5>
          <a href={project.github} className="page-link">
            <p>GitHub</p>
          </a>
          <a href={project.url} className="page-link">
            <p>View Project</p>
          </a>
        </div>
        <div className="page">
          <p>SKILLS: {project.tech}</p>
          <p>{project.full_description}</p>
          <p>{project.reflections}</p>
          <Link to={`/`}>
            <button id="project-btn">Home</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Project
