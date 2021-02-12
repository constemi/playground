const brand = "#4cb0a8";
const lightBrand = "#82cac4";

const accentColors = ['#6FFFB0', '#FD6FFF', '#81FCED', '#FFCA58'];
const neutralColors = ['#00873D', '#3D138D', '#00739D', '#A2423D'];

const statusColors: Record<string, any> = {
  critical: '#FF4040',
  error: '#FF4040',
  warning: '#FFAA15',
  ok: '#00C781',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC',
};

const darkColors = [
  '#333333',
  '#555555',
  '#777777',
  '#999999',
  '#999999',
  '#999999',
];

const lightColors = [
  '#F8F8F8',
  '#F2F2F2',
  '#EDEDED',
  '#DADADA',
  '#DADADA',
  '#DADADA',
];

const focusColor = accentColors[0];

const colors: Record<string, any> = {
  active: "rgba(221, 221, 221, 0.5)",
  'background-back': {
    dark: '#33333308',
    light: '#EDEDED',
  },
  'background-front': {
    dark: '#444444',
    light: '#FFFFFF',
  },
  'background-contrast': {
    light: '#33333310',
    dark: '#FFFFFF18',
  },
  'active-background': 'background-contrast',
  'active-text': 'text-strong',
  black: '#000000',
  border: {
    dark: "rgba(255, 255, 255, 0.33)",
    light: "rgba(0, 0, 0, 0.33)",
  },
  brand: brand,
  lightBrand: lightBrand,
  control: {
    dark: 'accent-1',
    light: 'brand',
  },
  focus: focusColor,
  'graph-0': 'accent-1',
  'graph-1': 'neutral-1',
  'graph-2': 'neutral-2',
  'graph-3': 'neutral-3',
  'graph-4': 'neutral-4',
  placeholder: '#AAAAAA',
  selected: brand,
  text: {
    dark: '#f8f8f8',
    light: '#444444',
  },
  'text-strong': {
    dark: '#FFFFFF',
    light: '#000000',
  },
  'text-weak': {
    dark: '#CCCCCC',
    light: '#555555',
  },
  'text-xweak': {
    dark: '#BBBBBB',
    light: '#666666',
  },
  icon: {
    dark: '#f8f8f8',
    light: '#666666',
  },
  'selected-background': brand,
  'selected-text': 'text-strong',
  white: '#FFFFFF',
};

const colorArray = (array: string[], prefix: string) =>
  array.forEach((color: string, index: number) => {
    colors[`${prefix}-${index + 1}`] = color;
  });

colorArray(accentColors, 'accent');
colorArray(darkColors, 'dark');
colorArray(lightColors, 'light');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach((color: string) => {
  colors[`status-${color}`] = statusColors[color];
});

const baseSpacing = 24;

const theme = {
  borderSize: {
    xsmall: '1px',
    small: '2px',
    medium: `${baseSpacing / 6}px`, // 4
    large: `${baseSpacing / 2}px`, // 12
    xlarge: `${baseSpacing}px`, // 24
  },
  breakpoints: {
    small: {
      value: baseSpacing * 32, // 768
      borderSize: {
        xsmall: '1px',
        small: '2px',
        medium: `${baseSpacing / 6}px`, // 4
        large: `${baseSpacing / 4}px`, // 6
        xlarge: `${baseSpacing / 2}px`, // 12
      },
      edgeSize: {
        none: '0px',
        hair: '1px', // for Chart
        xxsmall: '2px',
        xsmall: `${baseSpacing / 8}px`, // 3
        small: `${baseSpacing / 4}px`, // 6
        medium: `${baseSpacing / 2}px`, // 12
        large: `${baseSpacing}px`, // 24
        xlarge: `${baseSpacing * 2}px`, // 48
      },
      size: {
        xxsmall: `${baseSpacing}px`, // 24
        xsmall: `${baseSpacing * 2}px`, // 48
        small: `${baseSpacing * 4}px`, // 96
        medium: `${baseSpacing * 8}px`, // 192
        large: `${baseSpacing * 16}px`, // 384
        xlarge: `${baseSpacing * 32}px`, // 768
        full: '100%',
      },
    }
  },
  colors: {
    ...colors
  },
  deviceBreakpoints: {
    phone: 'small',
    tablet: 'medium',
    computer: 'large',
  },
  elevation: {
    light: {
      none: 'none',
      xsmall: '0px 1px 2px rgba(0, 0, 0, 0.20)',
      small: '0px 2px 4px rgba(0, 0, 0, 0.20)',
      medium: '0px 4px 8px rgba(0, 0, 0, 0.20)',
      large: '0px 8px 16px rgba(0, 0, 0, 0.20)',
      xlarge: '0px 12px 24px rgba(0, 0, 0, 0.20)',
    },
    dark: {
      none: 'none',
      xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
      small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
      medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
      large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
      xlarge: '0px 12px 24px rgba(255, 255, 255, 0.40)',
    },
  },
  opacity: {
    strong: 0.8,
    medium: 0.4,
    weak: 0.1,
  },
  size: {
    xxsmall: `${baseSpacing * 2}px`, // 48
    xsmall: `${baseSpacing * 4}px`, // 96
    small: `${baseSpacing * 8}px`, // 192
    medium: `${baseSpacing * 16}px`, // 384
    large: `${baseSpacing * 32}px`, // 768
    xlarge: `${baseSpacing * 48}px`, // 1152
    xxlarge: `${baseSpacing * 64}px`, // 1536
    full: '100%',
  },
  // icons derive a color through string parameters
  // within the global key.
  global: {
    colors: {
      ...colors
    },
  },
  button: {
    fg: "white",
    bg: brand,
  },
  card: {
    container: {
      round: "12px",
      elevation:
        "0 15px 35px 0 rgba(60,66,87,.08),0 5px 15px 0 rgba(0,0,0,.12);",
    },
    header: {},
    body: {},
    footer: {},
  },
  icon: {
    size: "small"
  },
};

export default theme