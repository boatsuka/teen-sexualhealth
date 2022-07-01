import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.enableCors({
    origin: 'http://147.50.231.136',
    credentials: true,
  });
  await app.use(cookieParser());
  await app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('Teen Sexual Health')
    .setVersion('1.0')
    .build();

  const documnet = SwaggerModule.createDocument(app, options);
  await SwaggerModule.setup('api/document', app, documnet);
  await app.listen(3001);
}
bootstrap();
