import NextAuth from "next-auth/next";
import prisma from "../../../_libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import bcrypt from 'bcrypt'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "youremail@mail.com",
        },
        password: { label: "password", type: "password" },
        username: { label: "Username", type: "text", placeholder: "Username" },
      },
      async authorize(credentials) {
        if(!credentials.email || !credentials.password){
            throw new Error("Please enter email and password")
        }

        const user = await prisma.user.findUnique({
            where: {
                email: credentials.email
            }
        })

        if (!user || !user?.hashedPassword){
            throw new Error ("User not found")
        }

        const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)

        if(!passwordMatch) {
            throw new Error("Incorrect Password")
        }
        return user;

      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt"
  },
  debug: process.env.NODE_ENV === "development"
};

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST }
