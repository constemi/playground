import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";
import {
  Button,
  Input,
  requiredTextField,
  withFormValidation,
} from "../../components";

const StyledForm = styled.form`
  width: 80%;
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

  const onSavePostClicked = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { formIsValid } = handleSubmit(event);

    if (formIsValid) {
      dispatch(
        postAdded({
          id: nanoid(),
          title: values.title,
          content: values.content,
        })
      );
    }
  };

  return (
    <StyledForm
      id="addPostForm"
      data-testid="addPostForm"
      onSubmit={onSavePostClicked}
    >
      <FormGroup className="form-group">
        <label htmlFor="postTitle">Post Title</label>
        <Input
          id="postTitle"
          type="text"
          className="form-control"
          name="title"
          data-testid="postTitle"
          placeholder="post title"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.title}
          error={touched.title && errors.title}
        />
      </FormGroup>
      <FormGroup className="form-group">
        <label htmlFor="postTitle">Post Content</label>
        <Input
          id="postContent"
          type="text"
          className="form-control"
          name="content"
          data-testid="postContent"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.content}
          error={touched.content && errors.content}
        />
      </FormGroup>
      <ButtonGroup className="form-group">
        <Button
          primary
          type="submit"
          text="Save Post"
          data-testid="submitPost"
        />
      </ButtonGroup>
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

export const AddPostForm = withFormValidation(Form, initialValues, validate);
