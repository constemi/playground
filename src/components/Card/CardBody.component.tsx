import React from "react";
import styled from "styled-components";

interface CardBodyProps {
  children: React.ReactNode;
}

const StyledCardBody = styled.div`
  padding: 24px 32px 18px;
`;

export const CardBody = ({ children }: CardBodyProps) => {
  return <StyledCardBody>{children}</StyledCardBody>;
};
