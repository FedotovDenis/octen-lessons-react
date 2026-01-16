import type { IUsersResponseModels } from "../models/IUsersResponseModels";
import type { ICartResponseModels } from "../models/ICartResponseModels";



const baseUrl = 'https://dummyjson.com';

export const userService = {
    getAllUsers: async (): Promise<IUsersResponseModels> => {
        return await fetch(baseUrl + '/users')
            .then(res => res.json())
    }
}

export const cartService = {
    getCartsOfUser: async (userID: string): Promise<ICartResponseModels> => {
        return await fetch(baseUrl + '/carts/user/' + userID)
            .then(res => res.json())
    }
}

