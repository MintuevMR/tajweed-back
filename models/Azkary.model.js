import mongoose from "mongoose";

const azkarySchema = mongoose.Schema({
  headerText: String,
  number: String,
  arabText: String,
  translateText: String,
  transcriptText: String,
  discriptionText: String,
  footerCount: String,
  footerName: String,
});

export const Azkary = mongoose.model("Azkary", azkarySchema);
