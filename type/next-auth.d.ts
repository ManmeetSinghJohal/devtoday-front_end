import { DefaultSession } from "next-auth";
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      email: string;
      username: string;
      image?: string;
      onboardingCompleted?: boolean;
    } & DefaultSession["user"];
  }
}
