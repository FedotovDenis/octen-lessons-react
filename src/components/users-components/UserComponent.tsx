import type { IUser } from "../../models/IUsers";
import type { FC } from "react";




type PropsType = {
    user: IUser;
}
export const UserComponent: FC<PropsType> = ({ user }) => {
    return (
        <div>
            {user.id}
            <h2>{user.firstName}</h2>
            <img src={user.image} alt={user.firstName} />
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
        </div>
    );
};