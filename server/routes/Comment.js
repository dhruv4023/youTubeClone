import express from 'express'

import { postcomment, deletecomment, getcomment,editcomment } from '../controllers/Comments.js'

import auth from '../middlewares/auth.js'

const router = express.Router()

router.post('/post',auth, postcomment)
router.get('/get', getcomment)
router.delete('/delete/:id',auth, deletecomment)
router.patch('/edit/:id',auth, editcomment)

export default router