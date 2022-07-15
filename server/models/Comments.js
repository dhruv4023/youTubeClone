import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    QAid: String,
    userId: String,
    commentBody: String,
    userCommented: String,
    commentOn: { type: Date, default: Date.now },
})

export default mongoose.model("Comments", userSchema)