import { NextResponse, type NextRequest } from "next/server";
import { getSession } from "next-auth/react";

export async function middleware(request: NextRequest) {
  const requestForNextAuth: any = {
    headers: {
      cookie: request.headers.get("cookie"),
    },
  };
  const session = await getSession({ req: requestForNextAuth });

  if (
    !session?.user &&
    !request.url.includes("signin") &&
    !request.url.includes("signup")
  ) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (
    session?.user &&
    session?.user.onboardingCompleted === false &&
    !request.url.includes("onboarding")
  )
    return NextResponse.redirect(new URL("/onboarding", request.url));

  if (
    session?.user &&
    session?.user.onboardingCompleted === true &&
    request.url.includes("onboarding")
  )
    return NextResponse.redirect(new URL("/", request.url));

  if (
    session?.user &&
    session?.user.onboardingCompleted === true &&
    (request.url.includes("signin") || request.url.includes("signup"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|assets|favicon.ico).*)",
};
