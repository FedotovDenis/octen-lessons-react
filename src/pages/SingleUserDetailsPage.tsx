import { useLocation } from "react-router-dom";
import type { IUser } from "../model/IUser";
import { SingleUserDetailsComponent } from "../components/users/SingleUserDetailsComponent";

export const SingleUserDetailsPage = () => {
    const { state } = useLocation();
    const user = state as IUser;

    return <SingleUserDetailsComponent user={user} />;
};