import { FC, Fragment } from "react";
import MainNavigtion from "../components/MainNavigation";
import classes from "./Error.module.css";
const ErrorPage: FC = (props) => {
  return (
    <Fragment>
      <main>
        <MainNavigtion />
        <p className={classes.content}> An Error occured</p>
      </main>
    </Fragment>
  );
};
export default ErrorPage;
