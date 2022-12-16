import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Schema as MSchema } from 'mongoose';

export type ProcedureDocument = Procedure & Document;

@Schema({ timestamps: true })
export class Procedure {
	_id: MSchema.Types.ObjectId;

	@Prop({
		required: true,
		trim: true,
		type: String,
	})
	procedure: string;
	@Prop({
		required: true,
		trim: true,
		type: String,
		unique: true
	})
	code: number;
	@Prop({
		required: true,
		type: String,
		trim: true
	})
	reclaim: string;
	@Prop({
		required: true,
		type: String,
		trim: true
	})
	difference: string;
	@Prop({
		required: true,
		type: String,
		trim: true
	})
	authorized: string;
}

export const ProcedureSchema = SchemaFactory.createForClass(Procedure);