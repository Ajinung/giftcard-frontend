import React, { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import BizzLogin from "../Auth/Business.Login";
import BizzSignUp from "../Auth/Business.Register";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import SelectAccount from "../Auth/SelectAccount";
import { useAppSelector } from "../Global/Store";
import Homescreen from "../LandingPage/Homescreen";
// import { dummy_user } from "../Global/ReduxState";
import DefaultScreen from "../DefaultScreen";

const HomeRoute = () => {
  const navigate = useNavigate();

  // const user = useAppSelector((state) => state.bizClient);
  // useEffect(() => {
  //   if (dummy_user?.role === "admin") {
  //     navigate("/dashboard", { replace: true });
  //   } else if (dummy_user?.role === "user") {
  //     navigate("/user-dashboard", { replace: true });
  //   }
  // }, []);

  // useEffect(() => {
  //   if (user?.status === "Business") {
  //     navigate("/business/dashboard", { replace: true });
  //   } else if (user?.status === "User") {
  //     navigate("/user/dashboard", { replace: true });
  //   }
  // }, []);

  const elements = useRoutes([
    {
      path: "/",
      element: <DefaultScreen />,
    },
    {
      path: "/select-account",
      element: <SelectAccount />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/business/register",
      element: <BizzSignUp />,
    },
    {
      path: "/business/login",
      element: <BizzLogin />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <div>{elements}</div>;
};

export default HomeRoute;
