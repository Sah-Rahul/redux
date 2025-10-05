import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./cmp/home";
import Images from "./cmp/images";
import Layout from "./cmp/layout";
import NotFound from "./cmp/404";
import Login from "./cmp/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/images",
    element: (
      <Layout>
        <Images />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
