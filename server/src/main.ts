import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.enableCors({
    origin: [`http://${process.env.SERVER_HOST}:${process.env.CLIENT_PORT}`, ],
    credentials: true,
  });

  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
