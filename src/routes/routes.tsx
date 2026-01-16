import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layuots/MainLayuot";
import { UsersPage } from "../pages/UsersPage";
import { CartsPage } from "../pages/CartsPage";

export const routes = createBrowserRouter([{
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'users',
            element: <UsersPage />,
            children: [
                { path: ':id/carts', element: <CartsPage /> }
            ]
        }
    ]
}]);