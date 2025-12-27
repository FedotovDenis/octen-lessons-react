import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { UsersComponent } from "../components/users-component/UsersComponent";

export const routes = createBrowserRouter([
    {
        path: '/', element: <App />,
        children: [
            { path: 'users', element: <UsersComponent /> },
            { path: 'posts', element: <div>Posts </div> },
            { path: 'comments', element: <div>Comments </div> },
            { path: 'products', element: <div>Products </div> },
        ],
    },
]);