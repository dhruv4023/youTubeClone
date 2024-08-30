import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String },
    desciption: { type: String },
    joinedOn: { type: Date, default: Date.now }
})

export default mongoose.model("User", userSchema)