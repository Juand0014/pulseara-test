import { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import { EventElements, FieldsType } from './useFields.types';

export const useFields = <T extends FieldsType>(fields: T) => {
	type FieldsKeys = keyof typeof fields;
	type KeyWithString = { [key in FieldsKeys]: string };
	const [values, setValues] = useState({} as KeyWithString);
	const [errors, setErrors] = useState({} as KeyWithString);

	useEffect(() => {
		const fieldsValues = Object.entries(fields).reduce(
			(result, [key, field]) => {
				result[key as FieldsKeys] = field.value;
				return result;
			},
			{} as KeyWithString
		);
		setValues(fieldsValues);
	}, []);

	const handleChange = (evt: ChangeEvent<EventElements>) => {
		const { name, value } = evt.target;
		setValues({ ...values, [name]: value });
	};

	const handleBlur = (evt: FocusEvent<EventElements>) => {
		const { name, value } = evt.target;

		for (let validate of fields[name].validations || []) {
			const errorMsg = validate({ name, value });
			setErrors(prevErrors => ({
				...prevErrors,
				[name as FieldsKeys]: errorMsg
			}));
			if (errorMsg) {
				return;
			}
		}
	};

	const reset = () => {
		setValues({ } as KeyWithString);
	};

	const existSomeError = Object.values(errors).some(error => error);

	return {
		values,
		errors,
		reset,
		handleChange,
		handleBlur,
		existSomeError
	};
};