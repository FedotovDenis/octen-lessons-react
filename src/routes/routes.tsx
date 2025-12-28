import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { PageUsersJSONPlaceholder } from "../pages/users/PageUsersJSONPlaceholder";
import { PageUsersDummyJson } from "../pages/users/PageUsersDummyJson";
import { PagePostsJSONPlaceholder } from "../pages/posts/PagePostsJSONPlaceholder";
import { PagePostsDummyJson } from "../pages/posts/PagePostsDummyJson";
import { PageCommentsJSONPlaceholder } from "../pages/comments/PageCommentsJSONPlaceholder";
import { PageCommentsDummyJson } from "../pages/comments/PageCommentsDummyJson";


export const routes = createBrowserRouter([
    {
        path: '/', element: <Layout />,
        children: [
            {
                path: 'users', children: [
                    { path: 'jsonplaceholder', element: <PageUsersJSONPlaceholder /> },
                    { path: 'dummyjson', element: <PageUsersDummyJson /> },
                ]
            },

            {
                path: 'posts', children: [
                    { path: 'jsonplaceholder', element: <PagePostsJSONPlaceholder /> },
                    { path: 'dummyjson', element: <PagePostsDummyJson /> },
                ]
            },

            {
                path: 'comments', children: [
                    { path: 'jsonplaceholder', element: <PageCommentsJSONPlaceholder /> },
                    { path: 'dummyjson', element: <PageCommentsDummyJson /> },
                ]
            },
        ],
    },
]);

