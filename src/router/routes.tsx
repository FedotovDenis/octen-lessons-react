import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../layouts/Layout";
import {HomePage} from "../pages/HomePage";
import {UsersPages} from "../pages/UsersPages";
import {PostsPage} from "../pages/PostsPage";


export const routes= createBrowserRouter([
    {
        path: '', element:<Layout/>,

        children: [
            {path: '', element: <HomePage/>},
            {path: 'users', element: <UsersPages/>},
            {path: 'posts', element: <PostsPage/>}
        ]
    }
]);