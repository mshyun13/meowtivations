import express from 'express'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/functions/auth'

const router = express.Router()

router.get('/me', async (req, res) => {})

export default router
