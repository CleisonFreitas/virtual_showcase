import { createBrowserRouter } from "react-router-dom";
import App from "../app/App";
import { ShowCase } from "../pages/showcase/ShowCase";
import Products from "../pages/products/Products";

export const WebRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path:'/',
                element: <ShowCase />
            },
            {
                path: '/products',
                element: <Products />
            }
        ]
    }
]);