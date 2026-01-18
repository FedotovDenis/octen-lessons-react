import type { IUsersResponse } from "../models/IUsersResponse";

export const apiService = {
    getAllUsers: async (page: string | number, limit: number = 6): Promise<IUsersResponse> => {
        const skip = (Number(page) - 1) * limit;
        const response = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
        return await response.json();
    }
};
