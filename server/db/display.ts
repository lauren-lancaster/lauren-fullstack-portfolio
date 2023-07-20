import connection from './connection'

const db = connection

export function getProjects() {
  return db('display').select()
}
