import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  margin-top: 25px;
  box-sizing: border-box;
  max-width: 540px;
  min-width: 0px;
  min-height: 0px;
  flex-direction: column;

  --darkBlue: #0a2540;
  --darkGray: #6b7c93;
  --slateBlue: #f6f9fc;
  --borderColor: #e6ebf1;
  --borderRadius: 4px;
  width: 540px;
  height: auto;
  background: #fff;
  box-shadow: 0 40px 81px -16px rgba(50, 50, 93, 0.25),
    0 24px 48px -24px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  user-select: none;
`;

interface CardProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export const Card = ({ style, children }: CardProps) => {
  return <StyledCard style={style}>{children}</StyledCard>;
};
