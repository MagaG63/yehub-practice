import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/ui/Layout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <div style={{height: '80vh'}}>app</div> },
      { path: "questions/:id", element: <>questin</> },
    ],
  },
]);


export default route;