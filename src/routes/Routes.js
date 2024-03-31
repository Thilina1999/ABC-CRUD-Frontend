import { useRoutes } from "react-router-dom";
import MainRoutes from "./MainRoutes";

const AllRoutes = [...MainRoutes];
const Routes = () => {
  return useRoutes(AllRoutes);
};

export default Routes;
