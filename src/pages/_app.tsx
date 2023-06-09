import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Sidebar />
      <div className="grow overflow-y-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
