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

  const project = useAppSelector((state) => state.display as Display)
  return (
    <>
      <h1>project</h1>
      <Link to={`/`}>
        <button>Home</button>
      </Link>
    </>
  )
}

export default Project
