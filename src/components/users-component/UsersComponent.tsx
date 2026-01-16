import { useState } from "react";
import type { IUser } from "../../models/IUsers";
import { useEffect } from "react";
import { userService } from "../../services/api.service";
import type { IUsersResponseModels } from "../../models/IUsersResponseModels";
import { UserComponent } from "../user-component/UserComponent";



export default function UsersComponent() {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAllUsers()
            .then(({ users }: IUsersResponseModels) => {
                setUsers(users)
            })
    }, []);

    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent key={user.id} user={user} />)
            }
        </div>
    );
}