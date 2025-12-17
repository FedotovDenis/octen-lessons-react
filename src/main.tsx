import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx"
import PageA from "./pages/PageA.tsx";
import PageB from "./pages/PageB.tsx";
import HomePage from "./pages/HomePage.tsx";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
           children: [
               {path: '', element: <HomePage/>},
               {path: 'a', element: <PageA/>},
               {path: 'b', element: <PageB/>},
           ]
    }
])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>);