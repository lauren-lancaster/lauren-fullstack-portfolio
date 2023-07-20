import * as displayActions from '../actions/display'
import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { Display } from '../../models/display'
import { useEffect } from 'react'

function Projects() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(displayActions.getProjectsThunk())
  }, [dispatch])

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
              <button>Learn more</button>
            </div>
          </>
        )
      })}
      {/* <div className="project">
        <p className="project-school">Dev Academy</p>
        <p className="project-group">Group Project</p>
        <p className="project-complete">Complete</p>
        <p className="project-name">ESC</p>
        <p className="project-description">
          A virtual escape room that tracks your time through a series of
          puzzles and mini games
        </p>
        <button>Learn more</button>
      </div>
      <div className="project">
        <p className="project-school">Dev Academy</p>
        <p className="project-group">Solo Project</p>
        <p className="project-complete">To Be Completed</p>
        <p className="project-name">Reading Tracker</p>
        <p className="project-description">
          An app where you can list and review the books you have read.
        </p>
        <button>Learn more</button>
      </div>
      <div className="project">
        <p className="project-school">VUW Sonic Arts</p>
        <p className="project-group">Solo Project</p>
        <p className="project-complete">Complete</p>
        <p className="project-name">Effects Controller</p>
        <p className="project-description">
          The design and prototype for a French horn effects controller
        </p>
        <button>Learn more</button>
      </div>
      <div className="project">
        <p className="project-school">VUW Sonic Arts</p>
        <p className="project-group">Solo Project</p>
        <p className="project-complete">Complete</p>
        <p className="project-name">Audio Visualiser</p>
        <p className="project-description">
          An audio visualiser that can record, save, and playback sound
        </p>
        <button>Learn more</button>
      </div> */}
    </>
  )
}

export default Projects
