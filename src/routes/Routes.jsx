import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";

import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Blog from "../Blog/Blog";
import PrivateRoutes from "./PrivateRoutes";
import ViewRecipes from "../ViewRecipes/ViewRecipes";
import ErrorPage from "../ErrorPage/ErrorPage";



const router = createBrowserRouter([

    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
      errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Main></Main>
             
            },

            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'showRecipe/:id',
                element: <PrivateRoutes><ViewRecipes></ViewRecipes></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://food-network-server-toma570.vercel.app/recipes/${params.id}`)

            }

        ]
    },

]);


export default router;