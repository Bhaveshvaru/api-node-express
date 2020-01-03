let mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://rest-api:DSAufP8DK5qrHw3k@cluster0-rklsl.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("Customer", CustomerSchema);
