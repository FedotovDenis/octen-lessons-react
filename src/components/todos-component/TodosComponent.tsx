import {useEffect, useState} from "react";
import type {ITodoModels} from "../../models/ITodoModels";
import {loadTodos} from "../../service/api.service";
import {TodoComponent} from "../todo-component/TodoComponent";

export const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodoModels[]>([])

    useEffect(() => {
        loadTodos().then(value => setTodos(value))
    }, [])

    return (
        <div>
            {
                todos.map(todo => <TodoComponent todo={todo} key={todo.id}/>)
            }
        </div>
    )
}