import { createBrowserRouter } from "react-router-dom";
import TwoColumn from "../features/two-column/TwoColumn";
import OneColumn from "../features/one-column/OneColumn";
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
        path: "/one-column",
        element: <OneColumn />,
    },
    {
        path: "/detailled",
        element: <Detailled />,
    },
]);