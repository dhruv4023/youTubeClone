import express from 'express'
import { getUser, updateUserProfile } from '../controllers/auth/users.controller.js';

const routes = express.Router();

routes.get("/:id", getUser)
routes.patch("/update/:id", updateUserProfile)

export default routes;