import { createBrowserRouter } from "react-router-dom";
import TwoColumn from "./features/two-column/TwoColumn";
import OneColumn from "./features/one-column/OneColumn";
import Detailled from "./features/detailled/Detailled";
import Cv from "./features/Cv";

export const routes = createBrowserRouter([
    {
        path: "/cv",
        element: <Cv />,
    },
    {
        path: "/cv/two-column",
        element: <TwoColumn />,
    },
    {
        path: "/cv/one-column",
        element: <OneColumn />,
    },
    {
        path: "/cv/detailled",
        element: <Detailled />,
    },
]);