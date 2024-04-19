import { AuthOptions } from "next-auth";
import  CredentialsProvider from "next-auth/providers/credentials";
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
        console.log("credentials", credentials);
        const res = await fetch("http://localhost:3005/auth/login", {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });
        return await res.json();
      },
    }),
  ],

  callbacks: {
    async jwt({ token }) {
      if (token.id) return token;
        const res = await fetch("http://localhost:3005/auth/find", {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({email: token.email}),
        });
        const userRes = await res.json();
      if (res.ok) {
        token.id = userRes.id;
        token.name = userRes.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (!session.user) return session;
       const res = await fetch("http://localhost:3005/auth/login", {
         method: "POST",
         mode: "cors",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(token.id),
       });
       const userRes = await res.json();
      if (!userRes) return session;
      session.user.id = userRes.id.toString();
      session.user.name = userRes?.name;
      session.user.email = userRes?.email;
      session.user.onboardingCompleted = false;
      return session;
    },
    async signIn({ account, profile }) {
      try {
        if (account?.provider === "github" || account?.provider === "google") {
          if (!profile) return false;
          const { email, name } = profile;
          if (!email) return false;
          const res = await fetch("http://localhost:3005/auth/find", {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          });
          const userRes = await res.json();
          if (!userRes) {
              const userCreateRes = await fetch("http://localhost:3005/auth/register", {
                method: "POST",
                mode: "cors",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({email, name}),
              });
              const newUser = await userCreateRes.json();
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
