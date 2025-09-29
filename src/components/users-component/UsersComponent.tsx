import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";


const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {

            getUsers()
            .then(respons => {
                setUsers(respons)
            })
    }, [])

    return (
        <>
            <div>
                {
                    users.map(user => <UserComponent key={user.id} item={user}/>)
                }
            </div>

        </>
    )
}

export default UsersComponent;