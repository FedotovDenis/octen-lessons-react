import { Outlet } from "react-router-dom";
import { MenuComponent } from "../components/menu/MenuComponent";




export default function MainLayout() {
    return (
        <div>
            <MenuComponent />
            <Outlet />
        </div>
    );
}