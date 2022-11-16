import { AppProps } from "next/app";
import "../components/searchbar/searchbar.css"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  );
};

export default App;
