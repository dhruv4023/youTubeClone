import express from 'express'
import { getAllUsers, updateUserProfile } from '../controllers/users.js';

import auth from '../middlewares/auth.js'

const routes = express.Router();


routes.get("/getAllUsers", getAllUsers)
routes.patch("/update/:id",updateUserProfile)

export default routes;