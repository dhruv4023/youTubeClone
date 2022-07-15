

import mongoose from "mongoose";

const historySchema = mongoose.Schema({
    videoId: { type: String, required: true },
    Viewer: { type: String, required: true },
    viewedOn: { type: Date, default: Date.now }
})

export default mongoose.model("history", historySchema)