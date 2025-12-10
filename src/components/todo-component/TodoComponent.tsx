import type {FC} from "react";
import type {ITodoModels} from "../../models/ITodoModels.ts";


type PropType = {
    todo: ITodoModels;
}
export const TodoComponent:FC<PropType> = ({todo: {id, todo, completed, userId}}) => {
    return(
        <div>
            <h3>{id}</h3>
            <h1>{todo}</h1>
            <big>{completed.toString()}</big>
            <big>{userId}</big>
        </div>
    )
}