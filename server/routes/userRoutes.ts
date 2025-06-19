import express from 'express'
import * as db from '../db/functions/user'
import checkJwt from '../auth0'
import { JwtRequest } from '../auth0.js'

const router = express.Router()

router.post('/', checkJwt, async (req: JwtRequest, res, next) => {
  try {
    const auth0_id = String(req.auth?.sub)
    const { username, email, avatar_url } = req.body
    const user = { auth0_id, username, email, avatar_url }
    await db.createUserProfile(user)
    res.status(201)
  } catch (e) {
    next(e)
  }
})

// router.get('/:id', async (req, res, next) => {
//   try {
//     const id = Number(req.params.id)
//     const user = await db.getUserProfile(id)
//     if (typeof user == 'undefined') {
//       return res.sendStatus(404)
//     } else {
//       res.json(user)
//     }
//   } catch (e) {
//     next(e)
//   }
// })

router.get('/', checkJwt, async (req: JwtRequest, res, next) => {
  try {
    const auth0_id = String(req.auth?.sub)
    const user = await db.getUserProfileByAuth(auth0_id)
    if (typeof user == 'undefined') {
      return res.sendStatus(404)
    } else {
      return res.json(user)
    }
  } catch (e) {
    next(e)
  }
})

export default router
