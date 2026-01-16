import { useEffect, useState } from "react";
import type { IUser } from "../../models/IUsers";
import type { IUsersResponseModels } from "../../models/IUsersResponseModels";
import { UserComponent } from "../user-component/UserComponent";
import { userService } from "../../services/api.service";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAllUsers()
            .then(({ users }: IUsersResponseModels) => {
                setUsers(users);
            });
    }, []);

    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent key={user.id} user={user} />)
            }
        </div>
    );
};