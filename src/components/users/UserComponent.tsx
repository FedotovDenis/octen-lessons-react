import type { FC } from "react";
import type { IUser } from "../../models/IUser";



type PropsType = {
    item: IUser;
}

export const UserComponent: FC<PropsType> = ({ item }) => {
    return (
        <li>
            <h2>{item.firstName} {item.lastName}</h2>
            <p>{item.email}</p>
            <img src={item.image} alt={item.firstName} />
        </li>
    )
}