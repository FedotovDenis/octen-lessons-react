import { UserComponent } from "./UserComponent";
import { useCallback, useEffect, useMemo, useState } from "react";

export const UsersComponent = () => {

    const [users, setUsers] = useState([]);

    const arr: number[] = useMemo(() => {
        return [1, 2, 3, 4, 5];
    }, []);

    const foo = useCallback(() => {
        console.log("foo called");
    }, []);

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
            <UserComponent foo={foo} arr={arr} />
        </>
    );
}