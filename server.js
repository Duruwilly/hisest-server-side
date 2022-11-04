import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import EmailSender from "./SendEmail.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
const port = process.env.PORT || 8800;

// ****** SEND API
app.post("/send", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    EmailSender({ name, email, phone, subject, message });
    res.json({ msg: "Message sent successfully" });
  } catch (error) {
    res.status(404).json({ msg: "Message not sent" });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
