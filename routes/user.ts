import express from 'express'
import userController from '../controllers/user.controller'
const userRouter = express.Router()

userRouter.post('/signup', userController.signup_user)

export default userRouter