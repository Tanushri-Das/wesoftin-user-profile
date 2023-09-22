import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ListView from "../Pages/ListView/ListView";
import DetailView from "../Pages/DetailView/DetailView";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/list-view',
                element:<ListView/>
            },
            {
                path: '/detail-view/:id',
                element: <DetailView />,
              },
        ]
    }
])
export default routes;