import React, { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Products.module.css";
const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];
const ProductsPage: FC = (props) => {
  return (
    <Fragment>
      <h1>The products page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id} className={classes.content}>
            <Link to={product.id}> {product.title}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ProductsPage;
