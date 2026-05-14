import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../layouts/Layout";
import {HomePage} from "../pages/HomePage";
import {UsersPages} from "../pages/UsersPages";
import {PostsPage} from "../pages/PostsPage";
import {UserPage} from "../pages/UserPage";


export const routes= createBrowserRouter([
    {
        path: '', element:<Layout/>,

        children: [
            {path: '', element: <HomePage/>},
            {path: 'users', element: <UsersPages/>},
            {path: 'users/:userId', element: <UserPage/>},
            {path: 'posts', element: <PostsPage/>}
        ]
    }
]);