import type {IUser} from "../model/IUser.ts";
import {urls} from "../constans/urls.ts";


const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then(value => value.json())

    }
}

export default userService;