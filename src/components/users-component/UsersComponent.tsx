import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";


const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
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