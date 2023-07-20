import type { ThunkAction } from '../store'
import * as api from '../apis/display'

import { Display } from '../../models/display'

export const GET_PROJECTS = 'GET_PROJECTS'
export const SHOW_ERROR = 'SHOW_ERROR'

export type ProjectsAction =
  | { type: typeof GET_PROJECTS; payload: Display[] }
  | { type: typeof SHOW_ERROR; payload: string }

export function getProjects(projects: Display[]): ProjectsAction {
  return {
    type: GET_PROJECTS,
    payload: projects,
  }
}

export function showError(errorMessage: string): ProjectsAction {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function getProjectsThunk(): ThunkAction {
  return async (dispatch) => {
    try {
      const projectArray = await api.getProjects()
      dispatch(getProjects(projectArray))
    } catch (err) {
      dispatch(showError(String(err)))
    }
  }
}
