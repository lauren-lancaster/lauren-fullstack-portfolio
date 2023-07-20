import request from 'superagent'

export async function getProjects() {
  const res = await request.get('/api/v1/display')
  return res.body
}

export async function getOneProject(id: number) {
  const res = await request.get(`api/v1/display/project/${id}`)
  console.log(id)
  console.log('api', res.body)
  return res.body
}
