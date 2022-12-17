import { inputCodeValidation, inputEmpty, inputNumberValidation } from "../../helpers";
import { FieldsType } from "../../hooks";

export const defaultFieldValues: FieldsType = {
	procedure: {
			value: "",
			validations: [inputEmpty],
	},
	code: {
			value: "",
			validations: [inputEmpty, inputNumberValidation, inputCodeValidation],
	},
	reclaim: {
			value: "",
			validations: [inputEmpty, inputNumberValidation],
	},
	difference: {
			value: "",
			validations: [inputEmpty, inputNumberValidation],
	},
	authorized: {
			value: "",
			validations: [inputEmpty, inputNumberValidation],
	},
};