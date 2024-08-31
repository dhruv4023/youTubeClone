import files from "../models/SingleFile.model.js";

export const ViewController = async (req, res) => {
  const { id: _id } = req.params;
//   console.log(_id)
  try {
    const file =await files.findById(_id);
    const Views = file.Views;
    // console.log(file)
    const updatedView = await files.findByIdAndUpdate(_id, {
      $set: { Views: Views + 1 },
    });
    res.status(200).json(updatedView);
  } catch (error) {
    // console.log("edi cmt")
    res.status(400).json("error");
  }
};
