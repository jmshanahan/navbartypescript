import { FC, Fragment } from "react";
import { useParams } from "react-router-dom";
import classes from "./ProductDetails.module.css";
const ProductDetailsPage: FC = () => {
  const parms = useParams();
  return (
    <Fragment>
      <h2>Product Details</h2>
      <div className={classes.content}>
        <p>{parms.productId}</p>
      </div>
    </Fragment>
  );
};

export default ProductDetailsPage;
