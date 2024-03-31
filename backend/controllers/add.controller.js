import Data from "../models/data.model.js";

export const add = async (req, res) => {
  let { record, domain, value } = req.body;
  try {
    const newData = new Data({
      record,
      domain,
      value,
    });
    let result = await newData.save();
    res.status(200).json(result);
  } catch (error) {
    res.send(error.message);
  }
};
