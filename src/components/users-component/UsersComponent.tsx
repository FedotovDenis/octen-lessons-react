import { useState } from "react";
import type { IUser } from "../../models/IUser";
import { getUsers } from "../../services/users.api.service";
import { useEffect } from "react";
import { UserComponent } from "./UserComponent";



export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getUsers()
            .then(({ users }) => { // Достаем список из ответа
                setUsers(users);
            });
    }, [])

    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent key={user.id} user={user} />)
            }
        </div>
    )
}