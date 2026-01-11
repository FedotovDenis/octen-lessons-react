import { createBrowserRouter } from "react-router-dom";
import { MainLayouts } from "../layouts/MainLayouts";
import { PostsPage } from "../pages/PostsPage";
import { UsersPage } from "../pages/UsersPage";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            { path: "users", element: <UsersPage /> },
            { path: "posts", element: <PostsPage /> }
        ]
    }
])