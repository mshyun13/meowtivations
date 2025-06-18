import * as Path from 'node:path'
import express from 'express'

import meowtivationRoutes from './routes/meowtivationRoutes'
import userRoutes from './routes/userRoutes'

const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.use('/api/v1/meowtivations', meowtivationRoutes)
server.use('/api/v1/users', userRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
