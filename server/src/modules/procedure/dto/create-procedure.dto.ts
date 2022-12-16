import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsNumber, IsCurrency,  } from 'class-validator';

export class CreateProcedureDto {
	@ApiProperty({
		description: 'Procedure name',
		example: 'Esclerosis',
		required: true,
		type: String
	})
	@IsString()
	@IsNotEmpty()
	procedure: string;

	@ApiProperty({
		description: 'Procedure code',
		example: 3425,
		required: true,
		type: Number
	})
	@IsNumber()
	@IsNotEmpty()
	@Type(()=> Number)
	code: number;

	@ApiProperty({
		description: 'Reclaim amount',
		example: 'RD$ 500',
		required: true,
		type: String
	})
	@IsNotEmpty()
	reclaim: string;

	@ApiProperty({
		description: 'Difference amount',
		example: 'RD$ 500',
		required: true,
		type: String
	})
	@IsNotEmpty()
	difference: string;

	@ApiProperty({
		description: 'Authorized amount',
		example: 'RD$ 500',
		required: true,
		type: String
	})
	@IsString()
	@IsNotEmpty()
	authorized: string;
}
