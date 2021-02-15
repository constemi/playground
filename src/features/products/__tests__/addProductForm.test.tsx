import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { Products } from "../Products.container";
import store from "../../../store";
import theme from "../../../theme";

function TestProductsForm() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Products />
      </ThemeProvider>
    </Provider>
  );
}

afterEach(cleanup);

it("submiting the posts form works correctly", () => {
  const { getByTestId, getByText } = render(<TestProductsForm />);

  fireEvent.change(getByTestId("productName"), {
    target: { value: "newProduct" },
  });
  fireEvent.change(getByTestId("productDesc"), {
    target: { value: "newProductContent" },
  });
  fireEvent.submit(getByTestId("addProductForm"));

  expect(getByTestId("productsList").textContent).toMatch(/newProduct/i);
  expect(getByTestId("productsList").textContent).toMatch(/newProductContent/i);
});
