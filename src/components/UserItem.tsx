import type { FC } from "react";
import type { IUser } from "../models/IUser";




type UserItemPropType = {
    user: IUser;
};

export const UserItem: FC<UserItemPropType> = ({ user }) => {
    return (
        <div>
            <h4>Ім'я: {user.name} Нікнейм: {user.username}</h4>
            <p>email: {user.email}</p>
            <p>phone: {user.phone}</p>
            <p>website: {user.website}</p>
        </div>
    );
};