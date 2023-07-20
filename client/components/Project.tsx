import * as displayActions from '../actions/display'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { Display } from '../../models/display'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
      <h1>{project.title}</h1>
      <h2>{project.school}</h2>
      <h3>{project.group}</h3>
      <h4>{project.complete}</h4>
      <h5>{project.created_at}</h5>
      <a href={project.github}>
        <p>GitHub</p>
      </a>
      <a href={project.url}>
        <p>View Project</p>
      </a>
      <p>SKILLS: {project.tech}</p>
      <p>{project.full_description}</p>
      <p>{project.reflections}</p>
      <Link to={`/`}>
        <button>Home</button>
      </Link>
    </>
  )
}

export default Project
