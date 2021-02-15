import React from "react";
import styled from "styled-components";
import { CircleAlert } from "grommet-icons";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: any;
  label?: string | null | undefined;
  testId?: string | null | undefined;
}

const StyledTextField = styled.div`
  display: inline-block;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 7px;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 0px 2px ${(props: any) => props.theme.colors.brandLight};

  &:focus-within {
    border: 2px solid
      ${(props: any) =>
        props["data-error"]
          ? props.theme.colors["status-error"]
          : props.theme.colors.brand};
  }
`;

const StyledLabel = styled.div`
  display: block;
  font-size: 12px;
  color: #6b7c93;
  margin-left: 5px;
`;

const StyledInput = styled.input.attrs((props) => ({
  type: props.type || "text",
  size: props.size || "1em",
}))`
  width: 90%;
  font-size: 1em;
  border: none;
  margin-left: 5px;
  padding: 12px;
`;

const StyledErrorMessage = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  color: ${(props) => props.theme.colors["status-error"]};
  padding-top: 5px;
  padding-bottom: 5px;
`;

const StyledIcon = styled.div`
  width: 15px;
  height: 15px;
  padding-right: 5px;
`;

export function TextField({
  error,
  label,
  testId,
  ...restProps
}: TextFieldProps): React.ReactElement {
  return (
    <>
      <StyledTextField data-error={error} {...restProps}>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput data-testid={testId} {...restProps} />
      </StyledTextField>
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
