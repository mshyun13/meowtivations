import express from 'express'
import * as db from '../db/functions/user'

const router = express.Router()

router.post('/', async (req, res, next) => {
  try {
    const { auth0_id, username, email, avatar_url } = req.body
    const user = { auth0_id, username, email, avatar_url }
    const id = await db.createUserProfile(user)
    const url = `/api/v1/users/${id}/profile`
    res.setHeader('Profile', url)
    res.status(201)
  } catch (e) {
    next(e)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const user = await db.getUserProfile(id)
    if (typeof user == 'undefined') {
      return res.sendStatus(404)
    } else {
      res.json(user)
    }
  } catch (e) {
    next(e)
  }
})

export default router
