import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name,
          email: profile.email,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
        };
      },
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/login`,
          {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          },
        );
        if (!res.ok) {
          return null;
        }
        const resultJson = await res.json();
        return resultJson;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, trigger }) {
      if (trigger === "update") {
        token.onboardingCompleted = true;
      }

      if (user) {
        // console.log("user", user)
        // console.log("token is running", token)
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/user`,
            {
              method: "POST",
              mode: "cors",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: user.email }),
            },
          );

          if (!res.ok) {
            throw new Error("Failed to fetch user on JWT callback");
          }

          const userRes = await res.json();
          // console.log("userRes", userRes);
          if (
            !userRes ||
            !userRes.id ||
            !userRes.username ||
            !userRes.profile
          ) {
            throw new Error("Invalid user response structure");
          }

          token.id = userRes.id;
          token.username = userRes.username;
          token.name = userRes.name;
          token.onboardingCompleted = userRes.profile.onBoardingCompleted;
        } catch (error) {
          console.error("JWT callback error:", error);
        }
      }

      return token;
    },

    async session({ session }) {
      if (!session.user) return session;

      try {
        // console.log("session is running", session)
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/user`,
          {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: session.user.email }),
          },
        );

        if (!res.ok)
          throw new Error("Failed to fetch user on session callback");

        const userRes = await res.json();
        // console.log("userRes from session", userRes)

        if (!userRes || !userRes.id || !userRes.username || !userRes.profile) {
          throw new Error("Invalid user response structure");
        }

        session.user.id = userRes.id;
        session.user.username = userRes.username;
        session.user.name = userRes.profile.name;
        session.user.onboardingCompleted = userRes.profile.onBoardingCompleted;
      } catch (error) {
        console.error("Session callback error:", error);
      }

      return session;
    },

    async signIn({ account, profile }) {
      try {
        // console.log("Signin is running")
        // console.log("account is running", account)
        // console.log("profile is running", profile)

        if (account?.provider === "github" || account?.provider === "google") {
          if (!profile) return false;

          const { email, name } = profile;
          if (!email) return false;

          const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/user`,
            {
              method: "POST",
              mode: "cors",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email }),
            },
          );

          const userRes = await res.json();
          // console.log("userRes from Signin", userRes)
          if (!userRes) {
            const userCreateRes = await fetch(
              `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/register/social`,
              {
                method: "POST",
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, name }),
              },
            );

            const newUser = await userCreateRes.json();
            // console.log("newUser from Signin", newUser)
            if (!newUser) {
              return false;
            }
            return true;
          }
          return true;
        }
        return true;
      } catch (error) {
        console.error("Error on sign in callback", error);
        return false;
      }
    },
  },

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  debug: process.env.NODE_ENV === "development",
};
