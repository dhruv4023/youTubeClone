

import mongoose from "mongoose";

const likedVideoSchema = mongoose.Schema({
    videoId: { type: String, required: true },
    Viewer: { type: String, required: true },
    viewedOn: { type: Date, default: Date.now }
})

export default mongoose.model("likedVideo", likedVideoSchema)