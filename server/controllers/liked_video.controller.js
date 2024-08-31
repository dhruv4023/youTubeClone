import LikedVideoModel from "../models/LikedVideo.model.js";

export const likedVideoController = async (req, res) => {
  const likedVideoData = req.body;
  // console.log(likedVideoData);
  const addTolikedVideo = new LikedVideoModel(likedVideoData);
  try {
    await addTolikedVideo.save();
    res.status(200).json("added to Liked Video");
  } catch (error) {
    console.log(error);
    res.status(400).json("could't add to Liked Video");
  }
};

export const getlikedVideo = async (req, res, next) => {
  try {
    const { userId, vid } = req.params;

    // Find the liked video for the specific user and video ID
    const likedVideo = await LikedVideoModel.findOne({ Viewer: userId, videoId: vid });

    // Count the number of likes for the given video ID
    const likeCount = await LikedVideoModel.countDocuments({ videoId: vid });

    res.status(200).json({
      data: likedVideo,
      likeCount: likeCount
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};


export const deletelikedVideo = async (req, res) => {
  const { videoId: videoId, Viewer: Viewer } = req.params;
  // console.log(_id)
  try {
    await LikedVideoModel.findOneAndDelete({ videoId: videoId, Viewer: Viewer });
    res.status(200).json({ message: "Removed From Your Liked Video Successfully  ..." })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}