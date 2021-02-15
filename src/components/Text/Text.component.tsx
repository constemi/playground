import React from "react";
//

const defaultStyle = {
  fontFamily: "Helvetica",
  fontSize: 10,
  opacity: 1,
};

export function Text({ style, opacity = 1, ...rest }: any) {
  const resolvedStyle = {
    ...defaultStyle,
    ...style,
  };

  return <text {...rest} style={resolvedStyle} />;
}
