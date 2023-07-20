import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import * as displayActions from '../actions/display'

import Home from './Home'
import Project from './Project'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(displayActions.getProjectsThunk())
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </>
  )
}
export default App
