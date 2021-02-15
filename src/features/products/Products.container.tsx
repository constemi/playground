import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AddProductForm } from "./AddProductForm.component";
import { ProductsList } from "./ProductsList.component";
import { Select } from "../../components";

const Section = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Aside = styled.aside`
  flex: 2;
  padding-right: 100px;
  max-width: 500px;
`;

const SelectContainer = styled.div`
  margin: 0 0 20px auto;
  display: flex;
  height: 100%;
  padding-top: 25px;
  .multi-select {
    --rmsc-primary: #4cb0a8;
    --rmsc-hover: #4cb0a8;
    --rmsc-selected: #fff;
    --rmsc-border: #d6d6d6;
    --rmsc-gray: #1b1c24;
    --rmsc-background: #fff;
    --rmsc-spacing: 10px;
    --rmsc-border-radius: 4px;
    --rmsc-height: 44px;
    width: 450px;
    height: 100%;
  }
  .multi-select span {
    vertical-align: middle;
  }
  .multi-select input {
    vertical-align: top;
  }
`;

export function Products() {
  const [selected, setSelected] = useState<any[]>([]);

  const products = useSelector((state: any) => state.products);

  const options = products.map((item: any) => ({
    label: item.name,
    value: item.id,
  }));

  return (
    <Section>
      <Aside>
        <h1>Input</h1>
        <AddProductForm />
        <h1>Multi Select</h1>
        <SelectContainer>
          <Select
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select Items"
            selectAllLabel="Select all"
          />
        </SelectContainer>
      </Aside>
      <ProductsList />
    </Section>
  );
}
