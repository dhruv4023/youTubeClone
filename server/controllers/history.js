
import history from "../models/History.js"

export const historyController = async (req, res) => {
  const historyData = req.body;
  // console.log(historyData)
  const addToHistory = new history(historyData);
  try {
    await addToHistory.save();
    res.status(200).json("added to history")
  } catch (error) {
    console.log(error);
    res.status(400).json("could't add to history")
  }
}


export const getHistory = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const files = await history.find({ Viewer: userId })
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


export const clearhistory = async (req, res) => {
  const { userId: userId } = req.params;
  // console.log(userId)
  try {
    await history.deleteMany({ userId: userId });
    res.status(200).json({ message: "Removed From Your likedVideo Successfully  ..." })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}