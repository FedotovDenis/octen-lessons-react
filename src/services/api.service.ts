import type {IUser} from "../model/IUser.ts";
import {urls} from "../constans/urls.ts";
import type {IPost} from "../model/IPost.ts";


const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then(value => value.json())

    }
}
export default userService;

const postService = {
    getAllPostsOfUserById: async (id: number): Promise<IPost[]> => {
        return await fetch(urls.posts.userPostsById(id))
            .then(value => value.json())
    }
}

export {postService}

