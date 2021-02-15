import React from "react";
import { getLabel } from "./helpers/generateLabels";

const Header = ({ value, options, valueRenderer, overrideStrings }: any) => {
  const noneSelected = value.length === 0;
  const allSelected = value.length === options.length;
  const customText = valueRenderer && valueRenderer(value, options);

  const getSelectedText = () =>
    value.map((s: Record<string, any>) => s.label).join(", ");

  if (noneSelected) {
    return (
      <span className="gray">
        {customText || getLabel("selectSomeItems", overrideStrings)}
      </span>
    );
  }

  return (
    <span>
      {customText
        ? customText
        : allSelected
        ? getLabel("allItemsAreSelected", overrideStrings)
        : getSelectedText()}
    </span>
  );
};

export default Header;
