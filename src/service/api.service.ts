import type {ITodoModels} from "../models/ITodoModels.ts";

const endpointTodos = import.meta.env.VITE_BASE_API_URL + '/todos';

const loadTodos = async (): Promise<ITodoModels[]> => {
    return await fetch(endpointTodos).
        then(value => value.json());
}

export {loadTodos}