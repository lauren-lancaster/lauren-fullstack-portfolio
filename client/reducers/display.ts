import { ProjectsAction, GET_PROJECTS, GET_PROJECT } from '../actions/display'

import { Display } from '../../models/display'

const initialState = [
  {
    id: 1,
    school: 'Dev Academy',
    group: 'Group Project',
    complete: 'Complete',
    title: 'ESC',
    description:
      'A virtual escape room that tracks your time through a series of puzzles and mini games',
    github: '',
    url: '',
    created_at: '',
    tech: '',
    full_description: '',
    reflections: '',
  },
] as Display[]

export default function displayReducer(
  state = initialState,
  action: ProjectsAction,
) {
  const { type, payload } = action
  switch (type) {
    case GET_PROJECTS:
      return payload
    case GET_PROJECT:
      return payload
    default:
      return state
  }
}
