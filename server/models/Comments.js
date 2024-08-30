import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    videoId: { type: String },
    userId: { type: String },
    commentBody: { type: String },
    userCommented: { type: String },
    commentOn: { type: Date, default: Date.now },
})

export default mongoose.model("Comments", userSchema)