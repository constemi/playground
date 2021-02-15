import { css } from "goober";
import React from "react";
import Header from "./Header.component";
import Dropdown from "./Dropdown.component";
import SelectPanel from "./SelectPanel.component";

const MultiSelectBox = css({
  "--rmscPrimary": "#4285f4",
  "--rmscHover": "#f1f3f5",
  "--rmscSelected": "#e2e6ea",
  "--rmscBorder": "#ccc",
  "--rmscGray": "#aaa",
  "--rmscBackground": "#fff",
  "--rmscSpacing": "10px",
  "--rmscBorderRadius": "4px",
  "--rmscHeight": "38px",

  "*": {
    boxSizing: "border-box",
    transition: "all 0.2s ease",
  },
  ".gray": {
    color: "var(--rmsc-gray)",
  },
});

export const Select = ({
  focusSearchOnOpen = true,
  hasSelectAll = true,
  shouldToggleOnHover = false,
  className = "multi-select",
  options,
  value,
  valueRenderer,
  overrideStrings,
  onChange,
  disabled,
  ItemRenderer,
  ArrowRenderer,
  selectAllLabel,
  isLoading,
  disableSearch,
  filterOptions,
  labelledBy,
  onMenuToggle,
}: any) => {
  const nvalue = value || [];
  return (
    <div className={`${MultiSelectBox} ${className}`}>
      <Dropdown
        isLoading={isLoading}
        contentComponent={SelectPanel}
        shouldToggleOnHover={shouldToggleOnHover}
        contentProps={{
          ItemRenderer,
          options,
          value: nvalue,
          hasSelectAll,
          selectAllLabel,
          onChange,
          disabled,
          disableSearch,
          focusSearchOnOpen,
          filterOptions,
          overrideStrings,
        }}
        disabled={disabled}
        labelledBy={labelledBy}
        onMenuToggle={onMenuToggle}
        ArrowRenderer={ArrowRenderer}
      >
        <Header
          value={nvalue}
          options={options}
          valueRenderer={valueRenderer}
          overrideStrings={overrideStrings}
        />
      </Dropdown>
    </div>
  );
};
