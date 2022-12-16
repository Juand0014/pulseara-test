import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { cors } from './config';

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
  await app.listen(3000);
  logger.log(`Application listening on port 3000`);
}
bootstrap();
