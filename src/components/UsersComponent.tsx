import { UserComponent } from "./UserComponent";
import { useCallback, useMemo } from "react";
import { useFetch } from "../hooks/useFetch";

export const UsersComponent = () => {

    const users = useFetch();

    const arr: number[] = useMemo(() => {
        return [1, 2, 3, 4, 5];
    }, []);

    const foo = useCallback(() => {
        console.log("foo called");
    }, []);

    console.log("UsersComponent rendered");
    return (
        <>
            <h1>Users Component</h1>
            {
                users.map(value => <UserComponent item={value} foo={foo} arr={arr} key={value.id}/>)
            }
        </>
    );
}