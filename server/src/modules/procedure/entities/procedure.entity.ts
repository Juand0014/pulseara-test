import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Schema as MSchema } from 'mongoose';

export type ProcedureDocument = Procedure & Document;

@Schema({ timestamps: true })
export class Procedure {
	_id: MSchema.Types.ObjectId;

	@ApiProperty({
		required: true,
		type: String,
		example: 'Esclerosis'
	})
	@Prop({
		required: true,
		trim: true,
		type: String,
	})
	procedure: string;

	@ApiProperty({
		required: true,
		type: Number,
		example: 3425
	})
	@Prop({
		required: true,
		trim: true,
		type: Number,
		unique: true
	})
	code: number;

	@ApiProperty({
		required: true,
		type: String,
		example: 'RD$ 500'
	})
	@Prop({
		required: true,
		type: String,
		trim: true
	})
	reclaim: string;

	@ApiProperty({
		required: true,
		type: String,
		example: 'RD$ 500'
	})
	@Prop({
		required: true,
		type: String,
		trim: true
	})
	difference: string;

	@ApiProperty({
		required: true,
		type: String,
		example: 'RD$ 500'
	})
	@Prop({
		required: true,
		type: String,
		trim: true
	})
	authorized: string;
}

export const ProcedureSchema = SchemaFactory.createForClass(Procedure);