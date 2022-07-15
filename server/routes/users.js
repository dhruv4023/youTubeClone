import express from 'express'
import {  login } from '../controllers/auth.js'; 
import { getAllUsers, updateUserProfile } from '../controllers/users.js';

import auth from '../middlewares/auth.js'

const routes = express.Router();

// routes.post("/signup", signup)
routes.post("/login", login)

routes.get("/getAllUsers", getAllUsers)
routes.patch("/update/:id",updateUserProfile)

export default routes;