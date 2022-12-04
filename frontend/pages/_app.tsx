import "@fontsource/syne-mono";
import "@fontsource/nunito";

import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import theme from "../lib/theme";
import { Chakra } from "../lib/darkmode";

export default function App({ Component, pageProps }: AppProps) {
  //@ts-ignore
  const PageLayout = Component.getLayout || Layout;
  return (
    <Chakra theme={theme} cookies={pageProps.cookies}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </Chakra>
  );
}
