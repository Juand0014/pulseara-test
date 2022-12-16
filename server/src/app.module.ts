require('dotenv').config();
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { database, envConfig, environment, JoiValidationSchema } from './config';
import { ProcedureModule } from './modules/procedure/procedure.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfig],
      validationSchema: JoiValidationSchema
    }),
    MongooseModule.forRoot(database[environment]),
    ProcedureModule,
    CommonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
