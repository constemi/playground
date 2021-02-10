import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  margin-top: 25px;
  box-sizing: border-box;
  max-width: 100%;
  min-width: 0px;
  min-height: 0px;
  flex-direction: column;
  padding: 56px 48px;
  width: ${(props) => props.theme.card.size || "384px"};
  border-radius: ${(props) => props.theme.card.container.round};
  box-shadow: ${(props) => props.theme.card.container.elevation};
  overflow: hidden;
`;

interface CardProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export const Card = ({ style, children }: CardProps) => {
  return <StyledCard style={style}>{children}</StyledCard>;
};
