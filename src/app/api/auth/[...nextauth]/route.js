import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"; 
import CredentialsProvider from "next-auth/providers/credentials"; 
import bcrypt from "bcryptjs"; // password compare
import { dbConnect, collections } from "@/lib/dbConnect"; 

export const authOptions = {
  providers: [
    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    }),

    // Email & Password Credentials
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // Database connection
        const userCollection = await dbConnect(collections.USER);
        const user = await userCollection.findOne({ email: credentials.email });

        if (!user) return null;

        // Password Check
        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) return null;

        // Whatever you return will go directly into the JWT token.
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role
        };
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET, // For security
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };