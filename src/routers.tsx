import { createBrowserRouter } from "react-router-dom";
import App from "./App";

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
        element: <>category</>,
      },
    ],
  },
  {
    path: "login",
    element: <div>Login</div>,
  },
]);
