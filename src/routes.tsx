import { createBrowserRouter } from "react-router-dom";
import OneColumn from "./features/one-column/OneColumn";

export const routes = createBrowserRouter([
  {
    path: "/cv",
    element: <OneColumn />,
  },
]);
