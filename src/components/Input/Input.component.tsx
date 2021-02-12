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
  box-shadow: 0px 0px 0px 2px ${(props) => props.theme.colors.lightBrand};
  &:focus {
    border: 2px solid
      ${(props) =>
        props.error
          ? props.theme.colors["status-error"]
          : props.theme.colors.brand};
  }
`;

const StyledErrorMessage = styled.div`
  display: flex;
  font-size: 1rem;
  color: ${(props) => props.theme.colors["status-error"]};
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
            <CircleAlert color="status-error" />
          </StyledIcon>
          {error}
        </StyledErrorMessage>
      )}
    </>
  );
}
