import Data from "../models/data.model.js";

export const data = async (req, res) => {
  try {
    let allData = await Data.find();
    res.status(200).json(allData);
  } catch (error) {
    res.send(error);
  }
};
