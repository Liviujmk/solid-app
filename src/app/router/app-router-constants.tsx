import { RouteObject } from "react-router-dom";
import { ArticlesPage } from "../../pages/articles-page";
import { PageLayout } from "../../layouts/page-layout";

export const routes: RouteObject[] = [
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <ArticlesPage />,
      }
    ], 
  },
];