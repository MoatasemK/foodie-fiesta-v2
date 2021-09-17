import axios from "axios";
import { redirectUser } from "../utils/auth.utils";
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

MyApp.getInitialProps = async ({ ctx }) => {
  const { token } = parseCookies(ctx);

  let pageProps = {};

  const protectedRoutes =
    ctx.pathname === "/create" || ctx.pathname === "/onboarding";

  const availableForEveryone = ctx.pathname === "/";

  // If user is not logged in
  if (!token) {
    destroyCookie(ctx, "token");
    // Redirect to login if user is trying to access protected routes
    protectedRoutes && redirectUser(ctx, "/auth");
  } else {
    try {
      const res = await axios.get(`http://localhost:3000/api/auth`, {
        headers: { Authorization: token },
      });
      const { user } = res.data;

      console.log("user", user);

      if (user && !availableForEveryone) {
        !protectedRoutes && redirectUser(ctx, "/");
      }
      pageProps.user = user;
    } catch (err) {
      console.error(err);
      destroyCookie(ctx, "token");
      redirectUser(ctx, "/auth");
    }
  }

  return { pageProps };
};
export default MyApp;
