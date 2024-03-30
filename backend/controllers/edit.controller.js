import Data from "../models/data.model.js";

export const edit = async (req, res) => {
  try {
    const result = await Data.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.send(error);
  }
};

export const prevData = async (req, res) => {
  try {
    const result = await Data.findOne({ _id: req.params.id });
    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.send(error);
  }
};
