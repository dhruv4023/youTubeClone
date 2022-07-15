import file from "../models/singlefile.js"
import mongoose from "mongoose"


export const ViewController = async (req, res) => {
    const { id: _id } = req.params;
    const { Views } = req.body;
    // console.log(_id,Views)
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Video unavailable...')
    }
    try {
        const updatedView = await file.findByIdAndUpdate(
            _id,
            {
                $set:
                    { "Views": Views }
            })
        res.status(200).json(updatedView)
    } catch (error) {
        // console.log("edi cmt")
        res.status(400).json("error")
    }  
}