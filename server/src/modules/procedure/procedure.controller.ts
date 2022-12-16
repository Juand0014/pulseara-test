import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { Schema } from 'mongoose';
import { ProcedureService } from './procedure.service';
import { CreateProcedureDto } from './dto/create-procedure.dto';
import { UpdateProcedureDto } from './dto/update-procedure.dto';
import { PaginationDto, ParseObjectIdPipe } from 'src/common';
import { ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { ApiResponseStatus } from 'src/config';
import { Procedure } from './entities/procedure.entity';

@Controller('procedure')
export class ProcedureController {
  constructor(private readonly procedureService: ProcedureService) {}

  @Post()
  @ApiOperation({
    description: 'Create Data',
    summary: 'Create Data',
  })
  @ApiResponseStatus(Procedure)
  create(@Body() createProcedureDto: CreateProcedureDto) {
    return this.procedureService.create(createProcedureDto);
  }

  @Get()
  @ApiResponseStatus(Procedure)
  @ApiQuery({
    name: "offset",
    required: false,
    type: Number,
    description: "Page number",
  })
  @ApiQuery({
    name: "limit",
    required: false,
    type: Number,
    description: "Limit number of entities returned",
  })
  @ApiOperation({ description: 'Get all data', summary: 'Get all data' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.procedureService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiResponseStatus(Procedure)
  @ApiOperation({ description: 'Get data by Id', summary: 'get data by Id' })
  @ApiParam({
    name: 'id',
    description: 'The id of the entity to find',
    type: String,
  })
  findOne(@Param('id', ParseObjectIdPipe) _id: Schema.Types.ObjectId) {
    return this.procedureService.findOne(_id);
  }

  @Patch(':id')
  @ApiOperation({
    description: 'Update data by Id and body',
    summary: 'Update data by Id and body',
  })
  @ApiResponseStatus(Procedure)
  @ApiParam({
    name: 'id',
    description: 'The id of the record to update',
    type: String,
  })
  update(@Param('id', ParseObjectIdPipe) id: Schema.Types.ObjectId, @Body() updateProcedureDto: UpdateProcedureDto) {
    return this.procedureService.update(id, updateProcedureDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    description: 'The id of the entity',
  })
  @ApiResponseStatus(Procedure)
  @ApiOperation({
    description: 'Create data by Id',
    summary: 'Create data by Id',
  })
  remove(@Param('id', ParseObjectIdPipe) _id: Schema.Types.ObjectId) {
    return this.procedureService.remove(_id);
  }
}
