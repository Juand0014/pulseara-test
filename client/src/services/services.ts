import { AxiosResponse } from 'axios';
import { api } from '../config';
import { Pagination } from './pagination.interface';

const get = async <T>(endpoint: string, pagination?: Pagination): Promise<AxiosResponse<T[]>> => {
	return (await api.get(endpoint, {
		params: pagination
	})).data;
};

export const http = {
	get
} 