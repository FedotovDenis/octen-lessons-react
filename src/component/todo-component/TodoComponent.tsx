import type {ITodoModels} from "../../models/ITodoModels.ts";
import {FC} from "react";

type PropType = {
    todo: ITodoModels
}
export const TodoComponent:FC<PropType> = ({todo: {title, id, completed}})=> {
    return (
        <div>{id} {title} {completed.toString()}</div>
    )
}