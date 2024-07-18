import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Service from "../pages/ServicePage";
import HomePage from "../pages/HomePage";
import Contact from "../pages/ContactPage";
import About from "../pages/AboutUsPage";
import ReviewList from "../components/ReviewList.jsx";
import CreateReview from "../components/CreateReview.jsx";
import UpdateReview from "../components/UpdateReview.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    /*  errorElement: <NotFoundPage />, */
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/reviews",
        element: <ReviewList />,
      },
      {
        path: "/create",
        element: <CreateReview />,
      },
      {
        path: "/update/:id",
        element: <UpdateReview />,
      },
    ],
  },
]);

export default Router;
