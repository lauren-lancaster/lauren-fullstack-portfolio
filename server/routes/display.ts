import express from 'express'
import * as db from '../db/display'

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const projects = await db.getProjects()
    res.json(projects)
  } catch (e) {
    next(e)
  }
})

router.get('/:id', async (req, res, next) => {
  const id = Number(req.params.id)
  try {
    const project = await db.getOneProject(id)
    res.json(project)
  } catch (e) {
    next(e)
  }
})

export default router
