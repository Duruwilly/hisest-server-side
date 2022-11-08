import nodemailer from "nodemailer";

const Email = (options) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "duruprincewilluzochukwu@gmail.com",
      pass: "rmlhgfmsvhlrkqhv",
    },
  });
  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

// send email
const EmailSender = ({ name, email, phone, subject, message }) => {
  const options = {
    from: `${email}`,
    to: process.env.SEND_TO,
    subject: `${subject}`,
    html: `
        <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
      <div style="max-width: 700px; background-color: white; margin: 0 auto">
        <div style="width: 100%; background-color: white; padding: 20px 0">
        <img
            src="/construction-company/src/assets/images/HisestLogoWhite.png"
            style="width: 100%; height: 70px; object-fit: contain"
          /> 
        
        </div>
        <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
          <div style="font-size: .8rem; margin: 0 30px">
            <p>FullName: <b>${name}</b></p>
            <p>Email: <b>${email}</b></p>
            <p>Phone: <b>${phone}</b></p>
            <p>Subject: <b>${subject}</b></p>
            <p>Message: <i>${message}</i></p>
          </div>
        </div>
      </div>
    </div>`,
  };

  Email(options);
};

export default EmailSender;
