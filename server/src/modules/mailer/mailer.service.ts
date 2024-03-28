import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  async createEmail(
    roleName: string,
    email: string,
    password: string,
    token: string,
  ) {
    const headerEmail = 'Registration completed successfully';

    const contentEmail =
      roleName === ('lawyer' || 'admin')
        ? 'Your data for auth: Login: ' +
          email +
          ' Pass: ' +
          password +
          ' Link activation: ' +
          ` ${process.env.SERVER_HOST}:${process.env.CLIENT_PORT}/activation-page?token=` +
          token
        : 'Link activation: ' +
          ` ${process.env.SERVER_HOST}:${process.env.CLIENT_PORT}/activation-page?token=` +
          token;

    return {
      email: email,
      headerEmail: headerEmail,
      contentEmail: contentEmail,
    };
  }

  async sendEmail(email: string, subject: string, text: string) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'a.contract.company@gmail.com', 
        pass: 'lthxajarbmzuegtc', 
      },
    });

    const mailOptions = {
      from: 'a.contract.company@gmail.com', 
      to: email, 
      subject: subject,
      text: text,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }
}
