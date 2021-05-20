const white = "#fff";
const black = "#111";

const palette = {
  common: {
    black,
    white,
  },
  primary: {
    main: "#1E6700",
    light: "#1E6700",
    white: white,
  },
  grey: {
    main: "#707070",
  },
};

const typography = {
  fontFamily: 'Regular,"Fira Sans", sans-serif',
};

export const spacing = {
  xxsmall: "5px",
  large: "47px",
};

export const fontSizes = {
  xxsmall: "0.75rem", //12px
  xsmall: "0.813rem", //13px
  small: "0.875rem", //14px
  medium: "1rem", //16px
  large: "1.125rem", //18px
  xlarge: "1.25rem", //20px
  xxlarge: "1.375rem", //22px
  large60: "2.75rem", //52px
};

const shape = {
  borderRadius: spacing["xxsmall"],
  largeBorderRadius: spacing["large"],
};

export const theme = {
  palette,
  typography,
  shape,
  fontSizes,
  spacing,
};
