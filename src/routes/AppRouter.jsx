import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";
import Portfolio from "../pages/portfolio/Portfolio";
import Blogs from "../pages/blogs/Blogs";
import Resume from "../pages/resume/Resume";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Error from "../pages/error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
