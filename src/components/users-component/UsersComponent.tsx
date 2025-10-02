import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";


const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const [item, setItem] = useState<IUser | null>(null)

    useEffect(() => {

            getUsers()
            .then(respons => {
                setUsers(respons)
            })
    }, [])

    const foo = (item: IUser) => {  // Добавлено =>
        setItem(item)
    }
    return (
        <>
            {
            item && (
                <div className="user-details">
                    <p><strong>Имя:</strong> {item.name}</p>
                    <p><strong>Логин:</strong> {item.username}</p>
                    <p><strong>Email:</strong> {item.email}</p>
                    <p><strong>Улица:</strong> {item.street}</p>
                    <p><strong>Телефон:</strong> {item.phone}</p>
                    <p><strong>Веб-сайт:</strong> {item.website}</p>
                </div>
            )}

            <div>
                {
                    users.map(user => <UserComponent foo={foo} key={user.id} item={user}/>)
                }
            </div>

        </>
    )
}

export default UsersComponent;