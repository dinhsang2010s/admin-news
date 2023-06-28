import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Category from "./components/Category";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <div>Dashboard</div>,
      },
      {
        path: "/user",
        element: <div>dsadas</div>,
      },
      {
        path: "/category",
        element: <Category />,
      },
    ],
  },
  {
    path: "login",
    element: <div>Login</div>,
  },
]);
