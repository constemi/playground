import React from "react";
import styled from "styled-components";

interface CardHeaderProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
const Header = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  justify-conent: between;
  height: ${(props) =>
    props.style ? props.style.height : props.theme.card.header.height};
`;

export const CardHeader = ({ children, ...props }: CardHeaderProps) => {
  return <Header {...props}>{children}</Header>;
};
