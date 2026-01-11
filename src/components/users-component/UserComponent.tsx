import type { IUser } from "../../models/IUser";

interface UserComponentProps {
    user: IUser
}


export const UserComponent = ({ user }: UserComponentProps) => {
    return (
        <div>
            <h1>{user.firstName}</h1>
            <h2>{user.lastName}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    )
}