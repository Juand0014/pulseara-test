import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { CreateProcedureDto } from './dto/create-procedure.dto';
import { UpdateProcedureDto } from './dto/update-procedure.dto';
import { Procedure } from './entities/procedure.entity';
import { PaginationDto } from '../../common';

@Injectable()
export class ProcedureService {

  constructor(
    @InjectModel(Procedure.name)
    private readonly proceduleModule: Model<Procedure>
  ){}

  async create(createProcedureDto: CreateProcedureDto): Promise<Procedure> { 
    try{
      const createdProcedure = new this.proceduleModule(createProcedureDto);
      return await createdProcedure.save();
    }
    catch(err){
      this.handleExceptions(err);
    }
  }

  async findAll(paginationDto: PaginationDto): Promise<Procedure[]> {
    const { limit = 10, offset= 0 } = paginationDto;
    try{
      return await this.proceduleModule
                 .find()
                 .select(['-__v', '-createdAt', '-updatedAt'])
                 .limit(limit)
                 .skip(offset)
                 .exec();
    }
    catch(err){
      throw new Error(err);
    }
  }

  async findOne(_id: Schema.Types.ObjectId): Promise<Procedure> {
    const procedure = await this.proceduleModule.findById({ _id })
    .select(['-__v', '-createdAt', '-updatedAt'])
    .exec();

    if(!procedure)
      throw new NotFoundException(`Procedure with id ${_id} not found`);
    
    return procedure;
  }

  async update(
    _id: Schema.Types.ObjectId, 
    updateProcedureDto: UpdateProcedureDto
  ): Promise<Procedure> {

    const procedure = await this.proceduleModule.findByIdAndUpdate(_id, updateProcedureDto, { new: true })
    .select(['-__v', '-createdAt', '-updatedAt'])
    .exec();

    if(!Boolean(procedure))
      throw new NotFoundException(`Procedure with id ${_id} not found`);

    return procedure;
  }

  async remove(_id: Schema.Types.ObjectId) {
    const { deletedCount } = await this.proceduleModule.deleteOne({ _id });
    if(!deletedCount)
      throw new NotFoundException(`Procedure with id ${_id} not found`);
    return { message: `Procedure with id ${_id} deleted` };
  }

  private handleExceptions(error: any) {
    if (error.code === 11000)
      throw new BadRequestException(
        `This property exist in database ${JSON.stringify(error.keyValue)}`,
      );
    throw new InternalServerErrorException(
      `Can't create property - Check server logs`,
    );
  }
}
