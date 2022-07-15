
// import mongoose from "mongoose";

// const userSchema = mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     password: { type: String, required: true },
//     about: { type: String },
//     tags: { type: [String] },
//     jointime: { type: String, default: Date.now }
// })

// export default mongoose.model("User", userSchema)


import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String },
    // password: { type: String, required: true },
    desc: { type: String },
    // age: { type: Date },
    joinedOn: { type: Date, default: Date.now }
})

export default mongoose.model("User", userSchema)