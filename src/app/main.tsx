import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import route from "./route/Route";
import { Provider } from "react-redux";
import store from "./store/store";
import "../shared//style/index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={route} />
  </Provider>,
);
