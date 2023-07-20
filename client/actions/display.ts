import type { ThunkAction } from '../store'
import * as api from '../apis/display'

import { Display } from '../../models/display'

export const GET_PROJECTS = 'GET_PROJECTS'
export const GET_PROJECT = 'GET_PROJECT'
export const SHOW_ERROR = 'SHOW_ERROR'

export type ProjectsAction =
  | { type: typeof GET_PROJECTS; payload: Display[] }
  | { type: typeof GET_PROJECT; payload: Display }
  | { type: typeof SHOW_ERROR; payload: string }

export function getProjects(projects: Display[]): ProjectsAction {
  return {
    type: GET_PROJECTS,
    payload: projects,
  }
}

export function getOneProject(project: Display): ProjectsAction {
  return {
    type: GET_PROJECT,
    payload: project,
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

export function getOneProjectThunk(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      const project = await api.getOneProject(id)
      console.log('action', project)
      dispatch(getOneProject(project))
    } catch (err) {
      dispatch(showError(String(err)))
    }
  }
}
