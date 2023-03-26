import React from "react";
import HomeRoute from "./components/AllRoutes/HomeRoute";
import PrivateRoutes from "./components/Private/Private";
import { dummy_user } from "./components/Global/ReduxState";
import BusinessRoutes from "./components/AllRoutes/BusinessRoute";
import UserRoutes from "./components/AllRoutes/UserRoutes";
function App() {
  return (
    <div>
      <HomeRoute />
      <PrivateRoutes>
        {dummy_user.role === "admin" ? <BusinessRoutes /> : <UserRoutes />}
      </PrivateRoutes>
    </div>
  );
}

export default App;
