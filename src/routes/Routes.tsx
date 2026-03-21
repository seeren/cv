import { createBrowserRouter } from "react-router-dom";
import TwoColumn from "../features/two-column/TwoColumn";
import Detailled from "../features/detailled/Detailled";
import Cv from "../features/Cv";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Cv />,
    },
    {
        path: "/two-column",
        element: <TwoColumn />,
    },
    {
        path: "/detailled",
        element: <Detailled />,
    },
]);