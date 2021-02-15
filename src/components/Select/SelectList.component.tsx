/**
 * This component represents an unadorned list of SelectItem (s).
 */
import { css } from "goober";
import React from "react";
import SelectItem from "./SelectItem.component";
import { OptionsType } from "./types";

interface ISelectListProps {
  focusIndex: number;
  ItemRenderer?: Function;
  options: OptionsType[];
  value: OptionsType[];
  onChange: (selected: OptionsType[]) => void;
  onClick: Function;
  disabled?: boolean;
}

const SelectListUl = css({
  margin: 0,
  paddingLeft: 0,
  li: {
    listStyle: "none",
    margin: 0,
  },
});

const SelectList = ({
  value,
  onChange,
  disabled,
  ItemRenderer,
  options,
  focusIndex,
  onClick,
}: ISelectListProps) => {
  const handleSelectionChanged = (option: OptionsType, checked: boolean) => {
    if (disabled) {
      return;
    }
    onChange(
      checked
        ? [...value, option]
        : value.filter((o: any) => o.value !== option.value)
    );
  };

  return (
    <ul className={SelectListUl}>
      {options.map((o: any, i) => (
        <li key={o.hasOwnProperty("key") ? o.key : i}>
          <SelectItem
            focused={focusIndex === i}
            option={o}
            onSelectionChanged={(c: any) => handleSelectionChanged(o, c)}
            checked={value.find((s) => s.value === o.value) ? true : false}
            onClick={(e: any) => onClick(e, i)}
            itemRenderer={ItemRenderer}
            disabled={o.disabled || disabled}
          />
        </li>
      ))}
    </ul>
  );
};

export default SelectList;
