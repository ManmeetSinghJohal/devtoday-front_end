import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(request) {
    console.log("request.nextauth.token", request.nextauth.token);
    const { token } = request.nextauth;
    const { pathname } = request.nextUrl;

    if (!token) {
      if (!pathname.includes("signin") && !pathname.includes("signup")) {
        return NextResponse.redirect(new URL("/signin", request.url));
      }
    } else {
      if (
        token.onboardingCompleted === false &&
        !pathname.includes("onboarding")
      ) {
        return NextResponse.redirect(new URL("/onboarding", request.url));
      }
      if (
        token.onboardingCompleted === true &&
        pathname.includes("onboarding")
      ) {
        return NextResponse.redirect(new URL("/", request.url));
      }
      if (pathname.includes("signin") || pathname.includes("signup")) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
);

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|assets|favicon.ico|signin|signup).*)",
};
