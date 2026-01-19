import type { IUsersResponseModels } from "../models/IUsersResponseModels";

const baseUrl = 'https://dummyjson.com';

export const userService = {
    getAllUsers: async (page: string): Promise<IUsersResponseModels> => {
        const limit = 30;
        const skip = (Number(page) - 1) * limit;
        const response = await fetch(`${baseUrl}/users?limit=${limit}&skip=${skip}`);
        return await response.json();
    }
};