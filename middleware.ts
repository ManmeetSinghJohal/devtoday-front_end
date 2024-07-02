import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(request) {
    console.log("request.nextauth.token", request.nextauth.token);
    // console.log("request.nextUrl", request.nextUrl);
    const { token } = request.nextauth;
    const { pathname } = request.nextUrl;

    if (!token) {
      // User is not authenticated
      if (!pathname.includes("signin") && !pathname.includes("signup")) {
        return NextResponse.redirect(new URL("/signin", request.url));
      }
    } else {
      // User is authenticated
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
export const config = { matcher: [] };

// import { NextResponse, type NextRequest } from "next/server";
// import { getSession } from "next-auth/react";

// export async function middleware(request: NextRequest) {
//   // return NextResponse.next();
//   const requestForNextAuth: any = {
//     headers: {
//       cookie: request.headers.get("cookie"),
//     },
//   };
//   const session = await getSession({ req: requestForNextAuth });

//   if (
//     !session?.user &&
//     !request.url.includes("signin") &&
//     !request.url.includes("signup")
//   ) {
//     return NextResponse.redirect(new URL("/signin", request.url));
//   }

//   if (
//     session?.user &&
//     session?.user.onboardingCompleted === false &&
//     !request.url.includes("onboarding")
//   )
//     return NextResponse.redirect(new URL("/onboarding", request.url));

//   if (
//     session?.user &&
//     session?.user.onboardingCompleted === true &&
//     request.url.includes("onboarding")
//   )
//     return NextResponse.redirect(new URL("/", request.url));

//   if (
//     session?.user &&
//     session?.user.onboardingCompleted === true &&
//     (request.url.includes("signin") || request.url.includes("signup"))
//   ) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: "/((?!api|_next/static|_next/image|assets|favicon.ico).*)",
// };
