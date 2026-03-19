import { createBrowserRouter } from "react-router-dom";
import TwoColumn from "../features/two-column/TwoColumn";
import Detailled from "../features/detailled/Detailled";

export const routes = createBrowserRouter([
    {
        path: "/cv",
        element: <TwoColumn />,
    },
    {
        path: "/cv/detailled",
        element: <Detailled />,
    },
]);