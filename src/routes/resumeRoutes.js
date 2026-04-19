import express from 'express'
import { generateResume } from '../../controllers/resumeController'

const router = express.Router()

router.post('/generate-resume', generateResume );

export default router