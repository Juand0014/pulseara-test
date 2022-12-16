import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { configSwagger, cors } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger("Application");
  app.setGlobalPrefix('/api')
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: false
    })
  )
  app.enableCors(cors);

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
  logger.log(`Application listening on port 3000`);
}
bootstrap();
