import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Errors,
  ForgetPassword,
  Home,
  Layout,
  Offer,
  Profile,
  Signin,
  Signup,
} from "./Pages";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/offers",
          element: <Offer />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/sign-in",
          element: <Signin />,
        },
        {
          path: "/sign-up",
          element: <Signup />,
        },
        {
          path: "/forget-password",
          element: <ForgetPassword />,
        },
        {
          path: "*",
          element: <Errors />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
