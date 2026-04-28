import UsersComponent from "../components/users/UsersComponent.tsx";
import {Outlet} from "react-router-dom";

export const UsersPages = () => {
    return(
        <div>
            <UsersComponent/>
            <Outlet/>
        </div>
    )
}