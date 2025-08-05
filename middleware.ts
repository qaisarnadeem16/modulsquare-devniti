// middleware.ts
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["fr", "en"],
  defaultLocale: "fr",
});

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
