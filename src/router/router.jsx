import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout> </MainLayout>,
      errorElement:<h2>Route not found!</h2>, 
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"register",
            element:<Register></Register>
        },
        {
          path:"login",
          element:<Login></Login>
        }
      ]
    },
  ]);

  export default router;