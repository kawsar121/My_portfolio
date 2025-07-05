import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";

export const router = createBrowserRouter([
    {
        path:"/",
        Component : MainLayOut
    }
])