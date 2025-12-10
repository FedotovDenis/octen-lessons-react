import type {ITodoModels} from "./ITodoModels";

export interface IPostResponseDymmeyjsonTodos {
    todos: ITodoModels[];
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

