import axios from "axios";
import type { ICar } from "../models/ICar";

export const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1',
    headers: { 'Content-Type': 'application/json' },
});

export const getCars = async (): Promise<ICar[]> => {
    const axiosResponse = await axiosInstance.get<ICar[]>('/cars');
    return axiosResponse.data;
}

export const createCarPage = async (car: ICar): Promise<ICar> => {
    const axiosResponse = await axiosInstance.post<ICar>('/cars', car);
    return axiosResponse.data;
}