const { Schema, model } = require("mongoose");

const now = new Date().getTime();

const FormsSchema = new Schema(
  {
    nom: {
      type: String,
    },
    question: {
      type: String,
    },
  },
  { strict: false }
);

const Forms = model("forms", FormsSchema);

module.exports = Forms;
