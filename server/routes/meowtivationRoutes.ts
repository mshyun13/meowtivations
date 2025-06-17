import express from 'express'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/functions/meowtivations.ts'

const router = express.Router()

// GET /api/v1/meowtivations/random
router.get('/random', async (req, res) => {
  try {
    const meowtivation = await db.getRandomMeowtivation()

    if (!meowtivation) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: 'No meowtivations found',
      })
    }

    res.status(StatusCodes.OK).json(meowtivation)
  } catch (error) {
    console.error('Error fetching random meowtivation:', error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: 'Failed to fetch random meowtivation',
    })
  }
})

// TODO: Students to implement
// GET /api/v1/meowtivations - get all meowtivations
router.get('/', async (req, res) => {
  // Implement: Get all public meowtivations with pagination
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ error: 'Not implemented yet' })
})

// TODO: Students to implement
// GET /api/v1/meowtivations/:id - get specific meowtivation
router.get('/:id', async (req, res) => {
  // Implement: Get meowtivation by ID with proper error handling
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ error: 'Not implemented yet' })
})

router.post('/', async (req, res) => {
  try {
    const { title, imageUrl, quote, user_id } = req.body
    const newMeowtivation = {
      title: title,
      imageUrl: imageUrl,
      quote: quote,
      user_id: user_id,
    }
    const result = await db.createMeowtivation(newMeowtivation)
    res.status(201).json({ result }) //Making it an object might be bad, note if crap hits the fan.
  } catch (error) {
    console.error('Chicken jockey ' + error)
    res.status(500)
  }
})

// TODO: Students to implement
// PUT /api/v1/meowtivations/:id - update meowtivation
router.put('/:id', async (req, res) => {
  // Implement: Update existing meowtivation with authorization check
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ error: 'Not implemented yet' })
})

// TODO: Students to implement
// DELETE /api/v1/meowtivations/:id - delete meowtivation
router.delete('/:id', async (req, res) => {
  // Implement: Delete meowtivation with authorization check
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ error: 'Not implemented yet' })
})

export default router
