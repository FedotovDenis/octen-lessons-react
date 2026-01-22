import axios from 'axios'
import type { IUser } from '../model/IUser'



const axiosInstance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
    headers: { 'Content-Type': 'application/json' },
})


axiosInstance.interceptors.request.use((request) => {
    console.log(request)
    request.headers.set('Authorization', 'Bearer ')
    return request
})

axiosInstance.interceptors.response.use((response) => {
    console.log(response)
    return response
})


export const getAllUsers = async (): Promise<IUser[]> => {
    const { data } = await axiosInstance.get<IUser[]>('/users')
    return data
}


export const saveUser = async (user: IUser): Promise<IUser> => {
    const { data } = await axiosInstance.post<IUser>('/users', user)
    return data
}











