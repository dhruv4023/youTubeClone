import express from 'express'

import { postcomment, deletecomment, getCommentsByVideoId,editcomment } from '../controllers/comments.js'

import auth from '../middlewares/auth.js'

const router = express.Router() 

router.post('/post',auth, postcomment)
router.get('/get/:vid', getCommentsByVideoId)
router.delete('/delete/:id',auth, deletecomment)
router.patch('/edit/:id',auth, editcomment) 

export default router