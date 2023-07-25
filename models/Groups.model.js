import mongoose from "mongoose";

const GroupModuleSchema = mongoose.Schema({
  groups: String,
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export const Group = mongoose.model("GroupModel", GroupModuleSchema);
