import WatchLaterModel from "../models/WatchLater.model.js";


export const watchLaterController = async (req, res) => {
  const watchLaterData = req.body;
  // console.log(watchLaterData);
  const addTowatchLater = new WatchLaterModel(watchLaterData);
  try {
    await addTowatchLater.save();
    res.status(200).json("added to Watch Later");
  } catch (error) {
    console.log(error);
    res.status(400).json("could't add to Watch Later");
  }
};

export const getwatchLater = async (req, res, next) => {
  try {
    const { userId, vid } = req.params;
    const files = await WatchLaterModel.findOne({ Viewer: userId, videoId: vid })
    res.status(200).json({"data":files});
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deletewatchLater = async (req, res) => {
  const { videoId: videoId, Viewer: Viewer } = req.params;
  // console.log(videoId,Viewer)
  try {
    await WatchLaterModel.findOneAndDelete({ videoId: videoId, Viewer: Viewer });

    res.status(200).json({ message: "Removed From Your Watch Later Successfully  ..." })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}