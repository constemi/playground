/**
 * This component represents an individual item in the multi-select drop-down
 */
import { css } from "goober";
import React, { useEffect, useRef } from "react";
import DefaultItem from "./DefaultItem.component";

interface Option {
  disabled: boolean;
  value?: any;
  label: string | undefined;
  selected: boolean;
}

interface ISelectItemProps {
  itemRenderer: (options: ISelectItemProps) => React.ReactElement;
  option: Option;
  checked: boolean;
  focused?: boolean;
  disabled?: boolean;
  onSelectionChanged: (checked: boolean) => void;
  onClick: (evt: any) => void;
}

const ItemContainer = css({
  boxSizing: "border-box",
  cursor: "pointer",
  display: "block",
  padding: "var(--rmsc-spacing)",
  outline: "0",
  "&:hover,&:focus": {
    background: "var(--rmsc-hover)",
  },
  "&.selected": {
    background: "var(--rmsc-selected)",
  },
});

const SelectItem = ({
  itemRenderer: ItemRenderer = DefaultItem,
  option,
  checked,
  focused,
  disabled,
  onSelectionChanged,
  onClick,
}: any) => {
  const itemRef: any = useRef();

  useEffect(() => {
    updateFocus();
    // eslint-disable-next-line
  }, [focused]);

  const toggleChecked = () => {
    onSelectionChanged(!checked);
  };

  const handleClick = (e: any) => {
    toggleChecked();
    onClick(e);
  };

  const updateFocus = () => {
    if (focused && !disabled && itemRef) {
      itemRef.current.focus();
    }
  };

  const handleKeyDown = (e: any) => {
    switch (e.which) {
      case 13: // Enter
      case 32: // Space
        toggleChecked();
        break;
      default:
        return;
    }
    e.preventDefault();
  };

  return (
    <label
      className={`${ItemContainer} select-item ${checked && "selected"}`}
      role="option"
      aria-selected={checked}
      tabIndex={-1}
      ref={itemRef}
      onKeyDown={handleKeyDown}
    >
      <ItemRenderer
        option={option}
        checked={checked}
        onClick={handleClick}
        disabled={disabled}
      />
    </label>
  );
};

export default SelectItem;
