import type {ITodoModels} from "../../models/ITodoModels.ts";
import {useEffect} from "react";
import {useState} from "react";
import {loadTodos} from "../../service/api.service.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";


export const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodoModels[]>([]);
    useEffect(() => {
        loadTodos().then(value => setTodos(value));
    }, [])
    return (
        <div>
            {
                todos.map(todo => <TodoComponent todo={todo} key={todo.id}/>)
            }
        </div>
    )
}