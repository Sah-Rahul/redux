import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./cmp/home";
import Images from "./cmp/images";
import Layout from "./cmp/layout";
import NotFound from "./cmp/404";
import Login from "./cmp/login";
import Protected from "./cmp/Protected";
import Profile from "./cmp/profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/images"
          element={
            <Layout>
              <Images />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route element={<Protected />}>
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
