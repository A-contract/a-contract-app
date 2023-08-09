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
          ' localhost:3000/activation-page?token=' +
          token
        : 'Link activation: ' +
          ' localhost:3000/activation-page?token=' +
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
        user: 'antfloppy@gmail.com', // Ваша почта Gmail
        pass: 'aqyfmrqkfhssuozj', // Пароль приложения (создается в настройках безопасности вашей учетной записи Google)
      },
    });

    const mailOptions = {
      from: 'antfloppy@gmail.com', // Отправитель
      to: email, // Получатель
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
