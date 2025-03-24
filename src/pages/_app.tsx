import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { CoursesStoreProvider } from "@/providers/CoursesStoreProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CoursesStoreProvider>
      <Component {...pageProps} />;
    </CoursesStoreProvider>
  );
}
