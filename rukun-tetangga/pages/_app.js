// This is the root file of rukuntetangga website

import Navbar from "../components/Navbar";
import { AuthContextProvider } from "../stores/authContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      {/* Komponen yang ada di dalam tags AuthContextProvider ini adalah children dari AuthContextProvider */}
      <Navbar />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
