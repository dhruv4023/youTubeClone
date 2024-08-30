import mongoose from "mongoose"
import UserModel from '../../models/Auth.js'

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = UserModel.findOne({ _id: id });
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateUserProfile = async (req, res) => {
    const { id: _id } = req.params;
    const { name, desc } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Question unavailable...')
    }
    try {
        const updatedProfile = await UserModel.findByIdAndUpdate(_id, { $set: { 'name': name, 'desc': desc } }, { new: true });
        res.status(200).json(updatedProfile)
    } catch (error) {
        res.status(405).json({ message: error.message })

    }
}
