import { AxiosResponse } from 'axios';
import { useQueryClient } from 'react-query';
import { api } from '../config';
import { Pagination } from './pagination.interface';

const get = async <T>(endpoint: string, pagination?: Pagination): Promise<AxiosResponse<T[]>> => {
	return (await api.get(endpoint, {
		params: pagination
	})).data;
}

const post = async <T>(url: string, data: any): Promise<AxiosResponse<T>> => {
	return await api.post(url, data);
}

const remove = async <T>(url: string, id: string): Promise<AxiosResponse<T>> => {
	return await api.delete(`${url}/${id}`);
}



export const http = {
	get,
	post,
	remove
} 