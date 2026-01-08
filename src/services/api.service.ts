import type { IDJUsersResponse } from "../model/dummyjson/IDJUsersResponse";
import { urls } from "../constants/urls";
import type { IJPUser } from "../model/jsonplaceholder/IJPUser";
import type { IJPPost } from "../model/jsonplaceholder/IJPPost";
import type { IDJPostsResponse } from "../model/dummyjson/IDJPostsResponse";
import type { IJPComment } from "../model/jsonplaceholder/IJPComment";
import type { IDJCommentsResponse } from "../model/dummyjson/IDJCommentsResponse";


// Сервис для работы с Пользователями
export const userService = {
    getAllJSONPlaceholder: async (): Promise<IJPUser[]> => {
        const response = await fetch(urls.jsonplaceholder.users.all);
        return response.json();
    },
    getAllDummyJSON: async () => {
        const response = await fetch(urls.dummyjson.users.all);
        const data: IDJUsersResponse = await response.json();
        return data.users;
    }
};

// Сервис для работы с Постами
export const postService = {
    getAllJSONPlaceholder: async (): Promise<IJPPost[]> => {
        const response = await fetch(urls.jsonplaceholder.posts.all);
        return response.json();
    },
    getAllDummyJSON: async () => {
        const response = await fetch(urls.dummyjson.posts.all);
        const data: IDJPostsResponse = await response.json();
        return data.posts;
    }
};

// Сервис для работы с Комментариями
export const commentService = {
    getAllJSONPlaceholder: async (): Promise<IJPComment[]> => {
        const response = await fetch(urls.jsonplaceholder.comments.all);
        return response.json();
    },
    getAllDummyJSON: async () => {
        const response = await fetch(urls.dummyjson.comments.all);
        const data: IDJCommentsResponse = await response.json();
        return data.comments;
    }
};