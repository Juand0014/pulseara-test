import { ValueNameType } from './validators.types';

export const inputEmpty = ({ value, name }: ValueNameType) => {
	return value.length === 0 && `${name} is required`;
};

export const inputNumberValidation = ({ value }: ValueNameType) => {
	return isNaN(+value) && 'Please enter a number';
};

export const inputCodeValidation = ({ value, name }: ValueNameType) => {
	return value.length < 3 && `${name} must be at least 3 characters`;
}
	