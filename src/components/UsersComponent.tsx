import { UserComponent } from "./UserComponent";
import { useEffect, useState } from "react";

export const UsersComponent = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => setUsers(value))
            .catch(reason => console.log(reason));
    }, []);

    console.log("UsersComponent rendered");
    return (
        <>
            <h1>Users Component</h1>
            <UserComponent />
        </>
    );
}