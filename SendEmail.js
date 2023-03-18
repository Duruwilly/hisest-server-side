import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });
  await transporter.sendMail(options);
};

// send email
const EmailSender = ({ name, email, phone, subject, message }) => {
  const options = {
    from: `${name}`,
    to: process.env.SEND_TO,
    subject: `${subject}`,
    html: `
    <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
    <div style="max-width: 700px; background-color: white; margin: 0 auto">
    <div style="width: 100%; background-color: white; padding: 20px 0">
    <img
    src="/hisest-web/src/assets/images/HisestLogoWhite.png"
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
  sendEmail(options);
};

export default EmailSender;
