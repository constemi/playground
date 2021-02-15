import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { productAdded } from "./productsSlice";
import {
  Button,
  TextField,
  requiredTextField,
  withFormValidation,
} from "../../components";

const StyledForm = styled.form`
  max-width: 540px;
  min-width: 0px;
  min-height: 0px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 8px;
`;

interface Dictionary<T> {
  [Key: string]: T | undefined;
}

export type Validation = {
  errors: Dictionary<string>;
  touched: Dictionary<string>;
  formIsValid?: boolean;
};

export type FormProps = {
  errors: Dictionary<string>;
  values: Dictionary<string>;
  touched: Dictionary<boolean>;
  handleBlur: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>) => Validation;
};

function Form({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched,
  values,
}: FormProps) {
  const dispatch = useDispatch();

  const onSaveProductClicked = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { formIsValid } = handleSubmit(event);

    if (formIsValid) {
      dispatch(
        productAdded({
          id: nanoid(),
          name: "Product",
          price: 19.99,
          retail: 25.5,
          shipping: 4.0,
          title: values.title,
          category: "Home & Kitchen",
          content: values.content,
        })
      );
    }
  };

  return (
    <StyledForm
      id="AddProductForm"
      data-testid="addProductForm"
      onSubmit={onSaveProductClicked}
    >
      <FormGroup className="form-group">
        <TextField
          id="productName"
          name="title"
          label="Title"
          className="form-control"
          testId="productName"
          placeholder="product name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.title}
          error={touched.title && errors.title}
        />
        <TextField
          id="productDesc"
          name="content"
          label="Content"
          className="form-control"
          testId="productDesc"
          placeholder="product description"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.content}
          error={touched.content && errors.content}
        />
        <ButtonGroup>
          <Button
            primary
            type="submit"
            text="Save Product"
            data-testid="submitProduct"
          />
        </ButtonGroup>
      </FormGroup>
    </StyledForm>
  );
}

const initialValues = {
  title: "",
  content: "",
};

const validate = {
  title: (title: string) => requiredTextField("title", title),
  content: (content: string) => requiredTextField("content", content),
};

export const AddProductForm = withFormValidation(Form, initialValues, validate);
