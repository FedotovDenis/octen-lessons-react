import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { UsersPage } from "./../pages/UsersPage";
import { PaginationLayout } from "../layouts/PaginationLayout";


export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout />, children: [
            {
                path: '', element: <PaginationLayout />, children: [
                    {
                        path: 'users', element: <UsersPage />
                    }
                ],
            }
        ]
    }
])