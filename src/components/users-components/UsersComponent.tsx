import { useEffect, useState } from "react";
import type { IUser } from "../../models/IUsers";
import { userService } from "../../services/api.service";
import type { IUsersResponseModels } from "../../models/IUsersResponseModels";
import { UserComponent } from "./UserComponent";
import { useSearchParams } from "react-router-dom";

export const UsersComponent = () => {
    const [searchParams] = useSearchParams({ page: '1' });
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        userService.getAllUsers(currentPage)
            .then(({ users }: IUsersResponseModels) => {
                setUsers(users);
            });
    }, [searchParams]);

    return (
        <div>
            <ul>
                {users.map(user => <UserComponent key={user.id} user={user} />)}
            </ul>
        </div>
    );
};