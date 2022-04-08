import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as path from 'path'
import express from 'express';

async function bootstrap() {
  const PORT = process.env.PORT || 8080;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });
  
  // app.use(express.static(path.join(__dirname, 'out')))

  //swagger
  const config = new DocumentBuilder()
    .setTitle('TytEda')
    .setDescription('Documentation REST API')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  //swagger
  await app.listen(PORT, () => {
    console.log(`Server started on port:${PORT}`);
  });
}

bootstrap();
