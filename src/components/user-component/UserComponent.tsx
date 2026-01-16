import type { IUser } from "../../models/IUsers";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";


type UserComponentProps = {
    user: IUser;
}

export const UserComponent: FC<UserComponentProps> = ({ user }) => {
    const navigate = useNavigate();

    return (
        <div>
            <p>id: {user.id}</p>
            <h2>{user.firstName} {user.lastName}</h2>
            <p>email: {user.email}</p>
            <button onClick={() => navigate(`/users/${user.id}/carts`)}>Carts user</button>
        </div>
    );
}