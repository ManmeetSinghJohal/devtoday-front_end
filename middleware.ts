import { NextResponse, type NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (
    !token &&
    !request.url.includes("signin") &&
    !request.url.includes("signup")
  ) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (
    token &&
    token.onboardingCompleted === false &&
    !request.url.includes("onboarding")
  ) {
    return NextResponse.redirect(new URL("/onboarding", request.url));
  }

  if (
    token &&
    token.onboardingCompleted === true &&
    request.url.includes("onboarding")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    token &&
    token.onboardingCompleted === true &&
    (request.url.includes("signin") || request.url.includes("signup"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|assets|favicon.ico).*)",
};
