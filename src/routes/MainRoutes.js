import React from "react";
import LoginPage from "../pages/loginPage";
import StudentViewPage from "../pages/StudentViewPage";
import StudentAddPage from "../pages/StudentAddPage";
import StudentUpdatePage from "../pages/StudentUpdatePage";
import NavbarLayout from "../components/organisms/NavbarLayout";

const MainRoutes = [
  {
    path: "/",
    element: <LoginPage />,
    exact: true,
  },
  {
    path: "student",
    element: <NavbarLayout />,
    children: [
      { path: "view", element: <StudentViewPage /> },
      { path: "add", element: <StudentAddPage /> },
      { path: "update", element: <StudentUpdatePage /> },
    ],
  },
];

export default MainRoutes;
