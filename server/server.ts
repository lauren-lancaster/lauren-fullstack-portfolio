import express from 'express'
import path from 'path'
import display from './routes/display'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('api/v1/display', display)

export default server
