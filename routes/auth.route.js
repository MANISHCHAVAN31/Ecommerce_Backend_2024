import express from 'express'
import { logout, signin, signup } from '../controllers/auth.controller.js'
import { isLoggedIn } from '../middlewares/auth.middleware.js'
const router = express.Router()

router.post('/signup', signup)
router.post('/signin', signin)
router.get('/logout', isLoggedIn, logout)

export default router