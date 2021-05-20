import "../styles/globals.styled.css";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import { theme } from "../config/themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
