import App from "next/app";
import "../styles/globals.css";
import { BaseStyles, ThemeProvider, Box } from "@primer/react";

function Platform({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <BaseStyles>
        <Box p={5} display={'flex'} sx={{width:'100%', minHeight:'100vh', justifyContent:'center', alignItems:'center'}}>
          <Component {...pageProps} />
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

Platform.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default Platform;
