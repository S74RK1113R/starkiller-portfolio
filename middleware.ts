import { NextResponse, type NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["es", "en"] as const;
const DEFAULT_LOCALE = "es";
const LOCALE_COOKIE = "NEXT_LOCALE";

function getLocaleFromAcceptLanguage(
  acceptLanguage: string | null,
): string | null {
  if (!acceptLanguage) return null;

  const locales = acceptLanguage
    .split(",")
    .map((entry) => {
      const [locale, q = "q=1"] = entry.trim().split(";");
      const quality = parseFloat(q.split("=")[1] || "1");
      return { locale: locale.split("-")[0], quality };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { locale } of locales) {
    if ((SUPPORTED_LOCALES as readonly string[]).includes(locale)) {
      return locale;
    }
  }

  return null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip if pathname already has a supported locale prefix
  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Skip API and static asset paths
  const skipPattern =
    /^\/(?:api|_next\/static|_next\/image|favicon\.ico|sitemap\.xml|robots\.txt|images|assets)\b/;
  if (skipPattern.test(pathname)) {
    return NextResponse.next();
  }

  // Detect locale: cookie > Accept-Language header > default
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const headerLocale = getLocaleFromAcceptLanguage(
    request.headers.get("Accept-Language"),
  );
  const locale = cookieLocale ?? headerLocale ?? DEFAULT_LOCALE;

  const url = new URL(`/${locale}${pathname}`, request.url);
  url.search = request.nextUrl.search;

  const response = NextResponse.redirect(url);

  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    httpOnly: false,
  });

  return response;
}

export const config = {
  matcher: [
    // Match all paths except internal Next.js and static files
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
