import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="grow overflow-scroll">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
