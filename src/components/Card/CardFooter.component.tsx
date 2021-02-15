import React from "react";
import styled from "styled-components";

interface CardFooterProps {
  children: React.ReactNode;
}

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px;
`;

export const CardFooter = ({ children }: CardFooterProps) => {
  return <StyledFooter>{children}</StyledFooter>;
};
