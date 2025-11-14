import { createBrowserRouter } from "react-router-dom";
import Cv from "../features/cv/Cv";
import Detail from "../features/detail/Detail";

export const routes = createBrowserRouter([
    {
        path: "/cv",
        element: <Cv />,
    },
    {
        path: "/cv/detail",
        element: <Detail />,
    },
]);