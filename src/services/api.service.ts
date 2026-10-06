




const baseUrl = 'https://jsonplaceholder.typicode.com';

/* 

Код везде одинаковый! Меняется только хвостик пути 
(`/users`, `/posts`, `/comments`) и тип данных, которые мы ожидаем получить 
(`IUser[]`, `IPost[]`, `IComment[]`).
написать __один универсальный метод__, который умеет делать запросы к 
любому эндпоинту и возвращать данные любого типа с помощью 
TypeScript __Generics (дженериков)__ `<T>`.
Позже можно расскоментировать код ниже и использовать универсальный 
метод `getAll` вместо отдельных методов для каждого эндпоинта.

*/

/*
export const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        const users = await fetch(baseUrl + '/users')
        .then(value => value.json());
        cosole.log(users);
        return users
    }
};

export const postService = {}

export const commentService = {}
*/


// Один универсальный метод, который умеет делать запросы к любому 
// эндпоинту и возвращать данные любого типа 
// с помощью TypeScript Generics `<T>`.
export const getAll = async <T>(endpoint: string) => {
    const responseResult = await fetch(`${baseUrl}${endpoint}`).then((response: Response) => response.json())
    return responseResult as T;
}