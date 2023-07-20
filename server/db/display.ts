import connection from './connection'

const db = connection

export function getProjects() {
  return db('display').select()
}

export function getOneProject(id: number) {
  return db('display').select().where({ id })
}
