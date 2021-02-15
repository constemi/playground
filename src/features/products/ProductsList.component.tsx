// @ts-nocheck
import React from "react";
import { Add } from "grommet-icons";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "../../components";
import { Table } from "./ProductsListTable.component";
import { productIdRemoved } from "./productsSlice";

const selectPriceSpread = createSelector(
  (state) => state.products,
  (products) =>
    products.map(({ retail, price, ...rest }) => ({
      price: price.toFixed(2),
      retail: retail.toFixed(2),
      spread: parseFloat(retail - price).toFixed(2),
      ...rest,
    }))
);

export const ProductsList = () => {
  const products = useSelector(selectPriceSpread);

  const dispatch = useDispatch();

  const removeProductIdClicked = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const {
      target: { id },
    } = event;
    dispatch(
      productIdRemoved({
        id,
      })
    );
  };

  const renderedProducts = products.map((item) => {
    const { id, image, name, title, category, content, ...rest } = item;
    return (
      <Card className="product-excerpt" key={item.id}>
        <CardHeader avatar title={name} image={image} subtitle={category} />
        <CardBody>
          <h3>{title}</h3>
          <p className="product-content">{content.substring(0, 100)}</p>
          <Table style={{ width: "100%" }} {...rest} />
        </CardBody>
        <CardFooter>
          <Button
            primary
            id={id}
            icon={<Add color="white" />}
            text="Add Product"
            type="button"
            onClick={removeProductIdClicked}
          />
        </CardFooter>
      </Card>
    );
  });

  return (
    <div data-testid="productsList" className="products-list">
      <h2>Products</h2>
      {renderedProducts}
    </div>
  );
};
