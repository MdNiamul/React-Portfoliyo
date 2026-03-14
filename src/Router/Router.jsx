import { createBrowserRouter } from "react-router";
import HomeLayOut from "../LayOut/HomeLayOut";
import Home from "../Component/Home/Home";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    children: [
        {
            path: '',
            element:<Home></Home>
        }
    ]
  },
  {
    path:"/*",
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;