import Layout from "../components/layout/Layout.component";
import { parseCookies, destroyCookie } from "nookies";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
