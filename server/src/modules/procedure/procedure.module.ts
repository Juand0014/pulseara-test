import { Module } from '@nestjs/common';
import { ProcedureService } from './procedure.service';
import { ProcedureController } from './procedure.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Procedure, ProcedureSchema } from './entities/procedure.entity';

@Module({
  controllers: [ProcedureController],
  providers: [ProcedureService],
  imports: [
    MongooseModule.forFeature([{ name: Procedure.name, schema: ProcedureSchema }])
  ],
  exports: [
    MongooseModule
  ]
})
export class ProcedureModule {}
