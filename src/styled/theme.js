import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    lightGray: "rgb(225,225,225)",
    darkGray: "rgb(38 50 56)",
  },
  fonts: {
    main: "'Noto Sans', sans-serif",
  },
};

const Provider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
