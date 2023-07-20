import request from 'superagent'
import type { Display } from '../../models/display'

export async function getProjects() {
  const res = await request.get('/api/v1/display')
  return res.body
}

export async function getOneProject(id: number): Promise<Display> {
  const res = await request.get(`/api/v1/display/${id}`)
  const data = res.body
  return data
}
