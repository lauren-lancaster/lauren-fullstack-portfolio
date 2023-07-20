import express from 'express'
import path from 'node:path/posix'
import display from './routes/display'

const server = express()

// server.use(express.json())
// server.use(express.static(path.join(__dirname, 'public')))
// server.use('api/v1/display', display)

server.use(express.json())
//server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1/display', display)
if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(path.join(__dirname, '../assets')))
  server.get('*', (req, res) => {
    const filePath = path.join(__dirname, '../index.html')
    res.sendFile(filePath)
  })
}

export default server
