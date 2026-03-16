import { createBrowserRouter } from "react-router";
import HomeLayOut from "../LayOut/HomeLayOut";
import Home from "../Component/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import Skills from "../Pages/Skills";
import Project from "../Component/Projects/Project";
import About from "../Pages/About";
import Experience from "../Pages/Experience";
import Contact from "../Pages/Contact";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    children: [
        {
            index: true,
            element:<Home></Home>
        },
        {
            path: 'Skills',
            element: <Skills></Skills>
        },
        {
          path: 'projects',
          element: <Project></Project>,
          // loader: ()=> fetch('/Project.json')
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'experience',
          element: <Experience></Experience>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        }
    ]
  },
  {
    path:"/*",
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;