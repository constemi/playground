/**
 * This component represents the entire panel which gets dropped down when the
 * user selects the component.  It encapsulates the search filter, the
 * Select-all item, and the list of options.
 */
import { css } from "goober";
import React, { useEffect, useState } from "react";
import SelectItem from "./SelectItem.component";
import SelectList from "./SelectList.component";
import { filterOptions } from "./helpers/fuzzymatch";
import { getLabel } from "./helpers/generateLabels";
import { OptionsType } from "./types";

interface ISelectPanelProps {
  ItemRenderer?: Function;
  options: OptionsType[];
  value: OptionsType[];
  focusSearchOnOpen: boolean;
  selectAllLabel?: string;
  onChange: (selected: OptionsType[]) => void;
  disabled?: boolean;
  disableSearch?: boolean;
  hasSelectAll: boolean;
  filterOptions?: (options: OptionsType[], filter: string) => OptionsType[];
  overrideStrings?: { [key: string]: string };
}

enum FocusType {
  SEARCH = -1,
  NONE = 0,
}

const SelectSearchContainer = css({
  width: "100%",
  borderBottom: "1px solid var(--rmsc-border)",
  input: {
    height: "var(--rmsc-height)",
    padding: "0 var(--rmsc-spacing)",
    width: "100%",
    outline: "none",
    border: "0",
  },
});

export const SelectPanel = (props: ISelectPanelProps) => {
  const {
    onChange,
    options,
    value,
    filterOptions: customFilterOptions,
    selectAllLabel,
    ItemRenderer,
    disabled,
    disableSearch,
    focusSearchOnOpen,
    hasSelectAll,
    overrideStrings,
  } = props;
  const [searchText, setSearchText] = useState("");
  const [focusIndex, setFocusIndex] = useState(
    focusSearchOnOpen ? FocusType.SEARCH : FocusType.NONE
  );

  const [selectAllLength, setSelectAllLength] = useState<number>();
  const selectAllOption = {
    label: selectAllLabel || getLabel("selectAll", overrideStrings),
    value: "",
  };

  useEffect(() => {
    setSelectAllLength(selectAllValues(true).length);
    // eslint-disable-next-line
  }, [options]);

  const selectAllValues = (checked: boolean) => {
    const selectedValues = value.map((o) => o.value);
    return options.filter(({ disabled, value }) => {
      if (checked) {
        return !disabled || selectedValues.includes(value);
      }
      return disabled && selectedValues.includes(value);
    });
  };

  const selectAllChanged = (checked: boolean) => {
    const newOptions = selectAllValues(checked);
    onChange(newOptions);
  };

  const handleSearchChange = (e: any) => {
    setSearchText(e.target.value);
    setFocusIndex(FocusType.SEARCH);
  };

  const handleItemClicked = (index: number) => setFocusIndex(index);

  const handleKeyDown = (e: any) => {
    switch (e.which) {
      case 38: // Up Arrow
        if (e.altKey) {
          return;
        }
        updateFocus(-1);
        break;
      case 40: // Down Arrow
        if (e.altKey) {
          return;
        }
        updateFocus(1);
        break;
      default:
        return;
    }
    e.stopPropagation();
    e.preventDefault();
  };

  const handleSearchFocus = () => {
    setFocusIndex(FocusType.SEARCH);
  };

  const filteredOptions = () =>
    customFilterOptions
      ? customFilterOptions(options, searchText)
      : filterOptions(options, searchText);

  const updateFocus = (offset: number) => {
    let newFocus = focusIndex + offset;
    newFocus = Math.max(0, newFocus);
    newFocus = Math.min(newFocus, options.length);
    setFocusIndex(newFocus);
  };

  return (
    <div className="select-panel" role="listbox" onKeyDown={handleKeyDown}>
      {!disableSearch && (
        <div className={SelectSearchContainer}>
          <input
            autoFocus={focusSearchOnOpen}
            placeholder={getLabel("search", overrideStrings)}
            type="search"
            aria-describedby={getLabel("search", overrideStrings)}
            onChange={handleSearchChange}
            onFocus={handleSearchFocus}
          />
        </div>
      )}

      {hasSelectAll && !searchText && (
        <SelectItem
          focused={focusIndex === 0}
          checked={selectAllLength === value.length}
          option={selectAllOption}
          onSelectionChanged={selectAllChanged}
          onClick={() => handleItemClicked(0)}
          itemRenderer={ItemRenderer}
          disabled={disabled}
        />
      )}

      <SelectList
        {...props}
        options={filteredOptions()}
        focusIndex={focusIndex - 1}
        onClick={(_e: any, index: number) => handleItemClicked(index + 1)}
        ItemRenderer={ItemRenderer}
        disabled={disabled}
      />
    </div>
  );
};

export default SelectPanel;
