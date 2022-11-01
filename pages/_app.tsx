import "../styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "@chakra-ui/pro-theme";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
