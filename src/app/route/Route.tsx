import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/ui/Layout";
import Page from "../../pages/questions/ui/Page";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Page /> },
      { path: "questions/:id", element: <>questin</> },
    ],
  },
]);

export default route;
