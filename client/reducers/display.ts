import { ProjectsAction, GET_PROJECTS } from '../actions/display'

import { Display } from '../../models/display'

const initialState = [] as Display[]

export default function displayReducer(
  state = initialState,
  action: ProjectsAction,
) {
  const { type, payload } = action
  switch (type) {
    case GET_PROJECTS:
      return payload
    default:
      return state
  }
}
