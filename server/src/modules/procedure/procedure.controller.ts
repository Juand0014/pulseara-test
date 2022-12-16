import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { Schema } from 'mongoose';
import { ProcedureService } from './procedure.service';
import { CreateProcedureDto } from './dto/create-procedure.dto';
import { UpdateProcedureDto } from './dto/update-procedure.dto';
import { PaginationDto, ParseObjectIdPipe } from 'src/common';

@Controller('procedure')
export class ProcedureController {
  constructor(private readonly procedureService: ProcedureService) {}

  @Post()
  create(@Body() createProcedureDto: CreateProcedureDto) {
    return this.procedureService.create(createProcedureDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.procedureService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) _id: Schema.Types.ObjectId) {
    return this.procedureService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('id', ParseObjectIdPipe) id: Schema.Types.ObjectId, @Body() updateProcedureDto: UpdateProcedureDto) {
    return this.procedureService.update(id, updateProcedureDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) _id: Schema.Types.ObjectId) {
    return this.procedureService.remove(_id);
  }
}
