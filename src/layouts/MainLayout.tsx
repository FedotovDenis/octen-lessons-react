import { Outlet } from "react-router-dom";
import { Menu } from "../components/shared/menu/Menu";

export const MainLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};
