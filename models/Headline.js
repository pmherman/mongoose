var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var HeadlineSchema = new Schema({
  headline: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  },
  saved: {
    type: Boolean,
    default: false
  },
  summary: {
    type: String,
  },
  date: {
    type: Date,
  }
});

var Headline = mongoose.model("Headline", HeadlineSchema);

//---------------Export the Headline model---------------//
module.exports = Headline;
