import React from "react";
import { css } from "goober";
import { OptionsType } from "./types";

import { Checkbox } from "../Checkbox";

interface IDefaultItemRendererProps {
  checked: boolean;
  option: OptionsType;
  disabled?: boolean;
  onClick: (evt: any) => void;
}

const DefaultRenderer = css({
  "& input,& span": {
    verticalAlign: "middle",
    margin: 0,
  },
  span: {
    display: "inline-block",
    paddingLeft: "10px",
  },
  "&.disabled": {
    opacity: 0.5,
  },
});

const DefaultItem = ({
  checked,
  option,
  onClick,
  disabled,
}: IDefaultItemRendererProps) => {
  return (
    <div
      className={`${DefaultRenderer} item-renderer ${disabled && "disabled"}`}
    >
      <Checkbox
        onChange={onClick}
        checked={checked}
        tabIndex={-1}
        disabled={disabled}
      />
      <span>{option.label}</span>
    </div>
  );
};

export default DefaultItem;
