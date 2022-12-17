import axios from "axios";
import { envs } from "../enviorament";

export const api = axios.create({
	baseURL: envs.API_URL,
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Content-Type": "application/json",
	}
});