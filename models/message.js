import mongoose from "mongoose";
import validator from "validator";

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email",
      async: false,
    },
  },
  message: {
    type: String,
    required: true,
  },
});

const MessageSchema = mongoose.model("UserMessage", messageSchema);
export default MessageSchema;
