import { useEffect, useState } from "react";
import type { IDJUser } from "../../../../model/dummyjson/IDJUser";
import { userService } from "../../../../services/api.service";
import { UserDummyJsonComponent } from "./UserDummyJsonComponent";


export const UsersDummyJsonComponent = () => {

    const [users, setUsers] = useState<IDJUser[]>([]);

    useEffect(() => {
        userService.getAllDummyJSON().then((all: IDJUser[]) => {
            setUsers(all);
        })
    }, []);

    return (
        <div>
            {
                users.map(user => <UserDummyJsonComponent item={user} key={user.id} />)
            }
        </div>
    );
};