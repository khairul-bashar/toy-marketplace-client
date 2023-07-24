
import {
  createBrowserRouter
} from "react-router-dom";
import Error from "../Components/Error";
import MainLayout from "../Layout/MainLayout";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys";
import Blog from "../Pages/Blog";
import EditToy from "../Pages/EditToy";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/LogIn/Register";
import MyToys from "../Pages/MyToys";
import ViewDetails from "../Pages/ViewDeatails";
import PrivateRouter from "../Private/PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/all-toys",
        element: <AllToys />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-toys",
        element: (
          <PrivateRouter>
            <AddToys />
          </PrivateRouter>
        ),
      },
      {
        path: "/view-details/:id",
        element: (
          <PrivateRouter>
            <ViewDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "/MyToys",
        element: (
          <PrivateRouter>
            <MyToys />
          </PrivateRouter>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRouter>
            <EditToy />
          </PrivateRouter>
        ),
      },
    ],
  },
]);

  export default router;


