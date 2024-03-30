import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  record: {
    type: String,
    require: true,
  },
  domain: {
    type: String,
    require: true,
    unique: true,
  },
  value: {
    type: String,
    require: true,
  },
});

const Data = mongoose.model("Data", dataSchema);

export default Data;
