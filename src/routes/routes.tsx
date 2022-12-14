//2. routesファイル書く
import { Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Manager from "../components/Manager";
import Viewer from "../components/Viewer"

export default [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/home",
        element: <Home />,
		children: [
			{
				path: "manager",
				element: <Manager />,
			},
			{
				path: "viewer",
				element: <Viewer />,
			},
		]
    },
    {
        path: "/",
        element: <Navigate to="/home" />,
    },
];
