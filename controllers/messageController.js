import MessageSchema from "../models/message.js";

export const PostMessage = async (req, res) => {
  const message = req.body;
  const newMessage = new MessageSchema(message);
  try {
    await newMessage.save();
    res.status(201).json(newMessage);
    console.log(newMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const GetMessage = async (req, res) => {
  const message = MessageSchema;
  try {
    await message.find();
    res.status(200).json(message);
    console.log("found , get it", message);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error);
  }
};
