import { AxiosResponse } from 'axios';
import { api } from '../config';

const get = async <T>(url: string): Promise<AxiosResponse<T>> => {
	return (await api.get(url)).data;
}

const post = async <T>(url: string, data: any): Promise<AxiosResponse<T>> => {
	return await api.post(url, data);
}

export const http = {
	get,
	post
} 