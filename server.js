import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import EmailSender from "./SendEmail.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const port = process.env.PORT || 9000;

// ****** SEND API
app.post("/send", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    EmailSender({ name, email, phone, subject, message });
    res.status(200).json({ msg: "Message sent successfully" });
  } catch (error) {
    res.status(404).json({ msg: "Message not sent" });
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
