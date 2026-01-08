const JSONPLACEHOLDER_URL = "https://jsonplaceholder.typicode.com";
const DUMMYJSON_URL = "https://dummyjson.com";

export const urls = {
    jsonplaceholder: {
        users: {
            all: `${JSONPLACEHOLDER_URL}/users`,
            byId: (id: number) => `${JSONPLACEHOLDER_URL}/users/${id}` // Функция для поиска по ID
        },
        posts: {
            all: `${JSONPLACEHOLDER_URL}/posts`,
            byId: (id: number) => `${JSONPLACEHOLDER_URL}/posts/${id}`
        },
        comments: {
            all: `${JSONPLACEHOLDER_URL}/comments`,
            byId: (id: number) => `${JSONPLACEHOLDER_URL}/comments/${id}`
        }
    },
    dummyjson: {
        users: {
            all: `${DUMMYJSON_URL}/users`,
            byId: (id: number) => `${DUMMYJSON_URL}/users/${id}`
        },
        posts: {
            all: `${DUMMYJSON_URL}/posts`,
            byId: (id: number) => `${DUMMYJSON_URL}/posts/${id}`
        },
        comments: {
            all: `${DUMMYJSON_URL}/comments`,
            byId: (id: number) => `${DUMMYJSON_URL}/comments/${id}`
        }
    }
}