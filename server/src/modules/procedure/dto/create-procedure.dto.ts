import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsNumber,  } from 'class-validator';

export class CreateProcedureDto {
	@IsString()
	@IsNotEmpty()
	procedure: string;

	@IsNumber()
	@IsNotEmpty()
	@Type(()=> Number)
	code: number;

	@IsString()
	@IsNotEmpty()
	reclaim: string;

	@IsString()
	@IsNotEmpty()
	difference: string;

	@IsString()
	@IsNotEmpty()
	authorized: string;
}
