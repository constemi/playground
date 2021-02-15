// @ts-nocheck
import React from "react";
import styled from "styled-components";

const Th = styled.th`
  font-size: 13px;
  color: #62788d;
`;

const Td = styled.td`
  color: #6b7c93;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
`;

export function Table({ style, retail, price, shipping, spread }) {
  const accent = { color: "orange", fontWeight: 500, fontSize: "18px" };
  return (
    <table style={style}>
      <tbody>
        <tr>
          <Th>Retail</Th>
          <Th>Price</Th>
          <Th>Shipping</Th>
          <Th>Profit</Th>
        </tr>
        <tr>
          <Td>{`$${retail}`}</Td>
          <Td style={accent}>{`$${price}`}</Td>
          <Td>{`$${shipping}`}</Td>
          <Td>{`$${spread}`}</Td>
        </tr>
      </tbody>
    </table>
  );
}
