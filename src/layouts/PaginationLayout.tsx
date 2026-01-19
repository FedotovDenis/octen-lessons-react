import { PaginationComponent } from "../components/pagination-component/PaginationComponent";
import { Outlet } from "react-router-dom";




export const PaginationLayout = () => {
    return (
        <div>
            <Outlet />
            <PaginationComponent />
        </div>
    );
};