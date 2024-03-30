import Data from "../models/data.model.js";

export const deleteData = async (req, res) => {
  try {
    const result = await Data.deleteOne({ _id: req.params.id });
    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.send(error);
  }
};
