import React from "react";
import styled from "styled-components";
import { CircleAlert } from "grommet-icons";

interface InputProps
  extends Partial<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  > {
  error?: string | false | undefined;
}
const StyledInput = styled.input.attrs((props) => ({
  type: props.type || "text",
  size: props.size || "1em",
}))`
  font-size: 1em;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 7px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: ${(props) => props.size};
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    ${(props) => props.theme.colors.lightBrand} 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  &:focus {
    border: 2.5px solid
      ${(props) =>
        props.error
          ? props.theme.colors.statuserror
          : props.theme.colors.brand};
  }
`;

const StyledErrorMessage = styled.div`
  display: flex;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.statuserror};
  flex-direction: row;
  padding-bottom: 10px;
`;

const StyledIcon = styled.div`
  width: 15px;
  height: 15px;
  padding-right: 5px;
`;

export function Input({ error, ...restProps }: InputProps): React.ReactElement {
  return (
    <>
      <StyledInput error={error} {...restProps} />
      {error && (
        <StyledErrorMessage>
          <StyledIcon>
            <CircleAlert color="statuserror" />
          </StyledIcon>
          {error}
        </StyledErrorMessage>
      )}
    </>
  );
}
