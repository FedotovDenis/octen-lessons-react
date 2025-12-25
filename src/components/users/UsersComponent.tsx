import {useEffect, useState} from "react";
import type {IUser} from "../../model/IUser.ts";
import userService from "../../services/api.service.ts";
import UserComponent from './UserComponent';

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {

        userService
            .getUsers()
            .then((allUsers: IUser[]) => {
            setUsers(allUsers)
        })
    }, []);

    return(
        <div>
            {
                users.map(user => <UserComponent item={user} key={user.id}/>)
            }
        </div>
    )
}

export default UsersComponent;