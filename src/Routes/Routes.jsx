import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ListView from "../Pages/ListView/ListView";
import DetailView from "../Pages/DetailView/DetailView";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
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