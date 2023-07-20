import request from 'superagent'

export async function getProjects() {
  const res = await request.get('/api/v1/display')
  return res.body
}
