import React from "react";

/** Wraps and Enhances a Form with FormValidation:
 * @param {Component} WrappedComponent
 * @param {object} initialValues
 * @param {object} validate {fieldName: (val) => validateFunc(fieldName, val)}
 *
 * const EnhancedForm = withFormValidation(Form, initialValues, validate)
 */

export type Dictionary<T> = {
  [Key: string]: T | undefined;
};

type Validation = {
  errors: Dictionary<string>;
  touched: Dictionary<boolean>;
  formIsValid?: boolean;
};

type State = {
  values: Dictionary<string>;
  errors: Dictionary<string>;
  touched: Dictionary<boolean>;
  submitted: boolean;
};

export type FormProps = {
  handleBlur: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>) => Validation;
  errors: Dictionary<string>;
  values: Dictionary<string>;
  touched: Dictionary<boolean>;
};

export const withFormValidation = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  initialValues: any,
  validate: any
) =>
  class WithFormValidation extends React.Component<{}> {
    state: State = {
      values: initialValues,
      errors: {},
      touched: {},
      submitted: false,
    };

    // change event handler
    handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value: newValue, type } = evt.target;
      const { submitted } = this.state;

      // optionally reset previously submitted form
      if (submitted) {
        this.setState((prevState: State) => ({
          ...prevState,
          errors: { ...prevState.errors, [name]: undefined },
          touched: { ...prevState.touched, [name]: false },
        }));
      }

      // keep number fields as numbers
      const value = type === "number" ? +newValue : newValue;

      // save field values
      this.setState((prevState: State) => ({
        values: { ...prevState.values, [name]: value },
        touched: { ...prevState.touched, [name]: true },
      }));
    };

    handleBlur = (evt: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = evt.target;

      // remove whatever error was there previously
      const { [value]: removedError, ...rest } = this.state.errors;

      // check for a new error
      const error = validate[name](value);
      const { touched } = this.state;

      this.setState({
        errors: {
          ...rest,
          ...(error && { [name]: touched[name] && error }),
        },
      });
    };

    // form submit handler
    handleSubmit = (evt: React.FormEvent<HTMLFormElement>): Validation => {
      evt.preventDefault();
      const { values, errors, touched } = this.state;

      // validate the form
      const validation = Object.keys(values).reduce(
        (acc, key) => {
          const newError = validate[key](values[key]);
          const newTouched = { [key]: true };
          return {
            errors: {
              ...acc.errors,
              ...(newError && { [key]: newError }),
            },
            touched: {
              ...acc.touched,
              ...newTouched,
            },
          };
        },
        {
          errors: { ...errors },
          touched: { ...touched },
        }
      );

      // update local state with validation results
      this.setState({
        submitted: true,
        errors: validation.errors,
        touched: validation.touched,
      });

      // return validated results
      const formIsValid = !Object.values(validation.errors).some((error) =>
        Boolean(error)
      );

      return { ...validation, formIsValid };
    };

    render() {
      const { values, errors, touched } = this.state;
      return (
        <WrappedComponent
          handleBlur={this.handleBlur}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={errors}
          touched={touched}
          values={values}
          {...(this.props as P)}
        />
      );
    }
  };
