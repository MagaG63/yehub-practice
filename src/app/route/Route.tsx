import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/ui/Layout";
import Questins from "../../pages/questions/ui/Page";
import Questin from "../../pages/question/ui/Page";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Questins /> },
      { path: "questions/:id", element: <Questin /> },
    ],
  },
]);

export default route;
