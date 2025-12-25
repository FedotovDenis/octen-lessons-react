import type { FC } from "react";
import type { IUser } from "../../model/IUser.ts";
import { useNavigate } from "react-router-dom";

type UserTypeProps = {
    item: IUser
}

const UserComponent: FC<UserTypeProps> = ({item}) => {

    const navigate = useNavigate();
    const handleOnCleack = () => {
        navigate(`/users/posts/${item.id}`, {state: item})
    }

    return(
        <div>
            <h3>{item.name}</h3>

            <button onClick={handleOnCleack}>
                go to details
            </button>
        </div>
    )
}

export default UserComponent;