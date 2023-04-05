import { FC, Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigtion from "../components/MainNavigation";
import "../App.css";
const RootLayout: FC = () => {
  return (
    <Fragment>
      <MainNavigtion />
      <main className="content">
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
