import React from "react";
import routes from "./routes/routes";
import { useRoutes } from "react-router-dom";

function App() {
	//4. useRoutes()
    const element = useRoutes(routes);

    return <div>{element}</div>;
}

export default App;
