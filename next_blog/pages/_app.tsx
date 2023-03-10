import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <div className="container mx-auto font-sans">
                <Navar />
                <main>
                    <Component {...pageProps} />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default MyApp;
