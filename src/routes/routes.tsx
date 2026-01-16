import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "./../pages/UsersPage";
import CartsPage from "./../pages/CartsPage";




export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout />, children: [
            {
                path: 'users', element: <UsersPage />
            },
            {
                path: 'users/:id/carts', element: <CartsPage />
            }
        ]
    }
])