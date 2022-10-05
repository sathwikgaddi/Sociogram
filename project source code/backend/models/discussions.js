const mongoose = require("mongoose");

const DiscussionsSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  answers: {type: Array, required: true},
  creator: { type: mongoose.Schema.Types.ObjectId, required: true }
});

module.exports = mongoose.model("Discussion", DiscussionsSchema);
