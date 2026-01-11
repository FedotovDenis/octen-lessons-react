import { Outlet } from "react-router-dom";
import { MenuComponent } from "../components/menu/MenuComponent";



export const MainLayouts = () => {
    return (
        <div>
            <MenuComponent />
            <Outlet />
        </div>
    )
}