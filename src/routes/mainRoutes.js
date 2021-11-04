import { lazy } from "react";

export const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName: "HomePage" */)
    ),
  },
  {
    name: "tasks",
    path: "/tasks",
    exact: false,
    component: lazy(() =>
      import("../pages/TasksPage" /* webpackChunkName: "TasksPage" */)
    ),
  },
];
