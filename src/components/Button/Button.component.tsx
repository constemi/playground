import React from "react";
import styled from "styled-components";
import { lighten } from "polished";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  text?: string;
  style?: React.CSSProperties;
  primary?: boolean;
  icon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledButton = styled.button`
  background: ${(props: any) =>
    props.primary ? props.theme.button.bg : props.theme.button.fg};
  border: 2px solid
    ${(props: any) =>
      props.primary ? props.theme.button.bg : props.theme.colors.bg};
  border-radius: 7px;
  box-shadow: 0 2px 5px 0 rgba(50, 50, 93, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.07);
  color: ${(props: any) =>
    props.primary ? props.theme.button.fg : props.theme.button.bg};
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  padding: 9px 13px;
  position: relative;
  transition: all 50ms ease;
  overflow: hidden;

  &:hover {
    border: 2px solid ${(props: any) => props.theme.button.bg};
    box-shadow: 0 1rem 2.5rem rgba(22, 63, 66, 0.1),
      0 0.5rem 1rem -0.75rem rgba(22, 63, 66, 0.1) !important;
    color: ${(props: any) =>
      props.primary ? props.theme.button.fg : props.theme.button.bg};
  }
  &:after {
    background: ${(props: any) =>
      props.primary
        ? lighten(0.4, props.theme.button.bg)
        : lighten(0.4, props.theme.button.fg)};
    content: "";
    display: block;
    position: absolute;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    padding-top: 300%;
    padding-left: 350%;
    transition: all 0.7s;
  }
  &:active {
    transform: translateY(0.5px);
  }
  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
`;

export const Button = ({ text, icon, ...restProps }: ButtonProps) => {
  return <StyledButton {...restProps}>{text || icon}</StyledButton>;
};
