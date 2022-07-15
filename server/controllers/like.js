import file from "../models/singlefile.js"
import mongoose from "mongoose"


export const likeController = async (req, res) => {
    const { id: _id } = req.params;
    const { Like } = req.body;
    console.log(_id,Like)
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Video unavailable...')
    }
    try {
        const updatedLike = await file.findByIdAndUpdate(
            _id,
            {
                $set:
                    { "Like": Like }
            })
        res.status(200).json(updatedLike)
    } catch (error) {
        // console.log("edi cmt")
        res.status(400).json("error")
    }  
}