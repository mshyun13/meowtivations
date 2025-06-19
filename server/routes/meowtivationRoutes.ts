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
        error: 'No meowtivations found'
      })
    }

    res.status(StatusCodes.OK).json(meowtivation)
  } catch (error) {
    console.error('Error fetching random meowtivation:', error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: 'Failed to fetch random meowtivation'
    })
  }
})

// TODO: Students to implement
// GET /api/v1/meowtivations - get all meowtivations
router.get('/', async (req, res) => {
  // Implement: Get all public meowtivations with pagination
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ error: 'Not implemented yet' })
})


// GET /api/v1/meowtivations/:id/comments - get specific meowtivation
router.get('/:id/comments', async (req, res) => {
   try {
    const id = Number(req.params.id) // can't convert 'a' to a number but we can convert '1' to 1
    const comments = await db.getCommentsByMeowtivationId(id)
    if(!comments){
      res.status(400)
      return
    }

    // ...
    res.status(200).json(comments)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('unknown error')
    }
    res.status(500).json({
      error: `Something went wrong.`,
    })
  }
})

// // POST /api/v1/meowtivations/:id/comments - post new comments 

// router.get('/:id/comments'), async (req, res) => {
//   try{
//     const id=Number(req.params.id)
//     const {user}
//   }catch(error){

//   }
// }



// GET /api/v1/meowtivations/:id - get specific meowtivation
router.get('/:id', async (req, res) => {
  // Implement: Get meowtivation by ID with proper error handling
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ error: 'Not implemented yet' })
})

// TODO: Students to implement
// POST /api/v1/meowtivations - create new meowtivation
router.post('/', async (req, res) => {
  // Implement: Create new meowtivation with validation
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ error: 'Not implemented yet' })
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