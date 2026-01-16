import type { IUser } from "../../models/IUsers";
import { useNavigate } from "react-router-dom";
import type { FC } from "react";


type UserComponentProps = {
    user: IUser;
}

export const UserComponent: FC<UserComponentProps> = ({ user }) => {

    const navigate = useNavigate();

    const onBateClickNavigate = () => {
        navigate(`/users/` + user.id + `/carts`);
    }

    return (
        <div>
            {user.id} {user.firstName} {user.lastName} {user.email}

            <button onClick={() => onBateClickNavigate()}>More</button>
        </div>
    );
};