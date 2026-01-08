import { useEffect, useState } from "react";
import type { IJPUser } from "../../../../model/jsonplaceholder/IJPUser";
import { userService } from "../../../../services/api.service";
import { UserJSONPlaceholderComponent } from "./UserJSONPlaceholderComponent";


export const UsersJSONPlaceholderComponent = () => {

    const [users, setUsers] = useState<IJPUser[]>([]);

    useEffect(() => {
        userService.getAllJSONPlaceholder().then((all: IJPUser[]) => {
            setUsers(all);
        })
    }, []);

    return (
        <div>
            {
                users.map(user => <UserJSONPlaceholderComponent item={user} key={user.id} />)
            }
        </div>
    );
};