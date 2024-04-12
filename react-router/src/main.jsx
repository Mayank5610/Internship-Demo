import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import User from "./components/user/User.jsx";
import Github, { githubInfoLoader } from "./components/github/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      {/* we cannot use / before about or there will bw an error */}
      <Route path="contact" element={<Contact />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
