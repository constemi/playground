import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Button, Input } from "../../components";
import { postAdded } from "./postsSlice";
import { withFormValidation, requiredTextField } from "../../components/Form";

const StyledForm = styled.form`
  width: 75%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

function Form({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched,
  values,
}: any) {
  const dispatch = useDispatch();

  const onSavePostClicked = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { errors } = handleSubmit(event);
    const formIsValid = !Object.values(errors).some((error) => Boolean(error));

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
      <div
        className="form-group"
        style={{ display: "flex", justifyContent: "end", paddingTop: "8px" }}
      >
        <Button
          primary
          type="submit"
          text="Save Post"
          data-testid="submitPost"
        />
      </div>
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
