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

export default router
