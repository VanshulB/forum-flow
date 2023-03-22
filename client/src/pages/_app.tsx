import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import theme from "../theme";
import { Provider, createClient } from "urql";

export default function App({ Component, pageProps }: AppProps) {
  const client = createClient({ url: "http://localhost:4000/graphql" });
  return (
    <Provider value={client}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
