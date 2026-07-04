import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/ui/Layout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <>app</> },
      { path: "questions/:id", element: <>questin</> },
    ],
  },
]);


export default route;