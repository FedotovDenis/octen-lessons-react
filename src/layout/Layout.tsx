import { Menu } from "../components/menu/Menu";
import { Outlet } from "react-router-dom";


export const Layout = () => {
    return (
        <div>
            <Menu />
            <Outlet />
        </div>
    );
};