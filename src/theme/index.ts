const colors = {
  brand: "#4cb0a8",
  lightBrand: "#82cac4",
  accent1: null,
  accent2: null,
  accent3: null,
  accent4: null,
  neutral1: null,
  neutral2: null,
  neutral3: null,
  neutral4: null,
  statuscritical: "#FF4040",
  statuserror: "#FF4040",
  statuswarning: "#FFAA15",
  statusok: "#00C781",
  statusunknown: "#CCCCCC", 
  light1: "#F8F8F8",
  light2: "#F2F2F2",
  light3: "#EDEDED",
  light4: "#DADADA",
  dark1: "#333333",
  dark2: "#555555",
  dark3: "#777777",
  dark4: "#999999",
}

const theme = {
  breakPoints: {
    xs: "0px",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px"
  },
  colors: {
      ...colors,
  },
  global: {
    colors: {
      ...colors
    },
  },
  button: {
    fg: "white",
    bg: colors.brand,
  },
  card: {
    container: {
      round: "12px",
      elevation:
        "0 15px 35px 0 rgba(60,66,87,.08),0 5px 15px 0 rgba(0,0,0,.12);",
    },
    header: {
      height: "192px",
    },
    body: {},
    footer: {},
  },
  icon: {
    size: "small"
  },
};

  export default theme