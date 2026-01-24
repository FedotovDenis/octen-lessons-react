import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { CarsPage } from "../pages/CarsPage";
import { CreateCarPage } from "../pages/CreateCarPage";

export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout />, children: [
            { path: "cars", element: <CarsPage /> },
            { path: "create", element: <CreateCarPage /> },
        ],
    },
]);
