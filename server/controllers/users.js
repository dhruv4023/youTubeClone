import mongoose from "mongoose"
import user from '../models/auth.js'

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await user.find();
        const allUserDetails = []
        allUsers.forEach(users => {
            //     name: { type: String, required: true },
            // email: { type: String, required: true },
            // password: { type: String, required: true },
            // about: { type: String },
            // tags: { type: [String] },
            // age: { type: Date },
            // joinedOn: { type: Date, default: Date.now }
            allUserDetails.push({ _id: users._id, name: users.name, email: users.email, about: users.about, tags: users.tags, joinedOn: users.joinedOn});
        })
        res.status(200).json(allUserDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateUserProfile = async (req, res) => {
    const { id: _id } = req.params;
    const { name,desc} = req.body;
    // console.log(req.body)
    // console.log(_id, name, about, tags)
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Question unavailable...')
    }
    try {
        const updatedProfile = await user.findByIdAndUpdate(_id, { $set: { 'name': name, 'desc': desc } }, { new: true });
        res.status(200).json(updatedProfile)
    } catch (error) {
        res.status(405).json({ message: error.message })

    }
}
