import { useRoutes } from "react-router-dom";

import { routes } from "./app-router-constants";
  
export const Router = () => {
    return useRoutes(routes);
}