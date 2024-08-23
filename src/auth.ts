import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./prisma";
import bcrypt from "bcryptjs";
import { saltAndHashPassword } from "./helpers/helper";
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        if (!credentials || !credentials?.email || !credentials?.password) {
          return null;
        }
        console.log(credentials);

        const email = credentials.email as string;
        const hashedPassword = saltAndHashPassword(
          credentials.password as string
        );
        let user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        console.log("hello 1 ", user);

        if (!user) {
          user = await prisma.user.create({
            data: {
              email,
              hashedPassword,
            },
          });
          console.log("hello 2 ");
        } else {
          console.log("hello 3 ");

          const isMatch = await bcrypt.compare(
            credentials.password as string,
            user.hashedPassword as string
          );
          console.log("hello 4 ");

          if (!isMatch) {
            console.log("hello 5 ");

            throw new Error("Incorrect password");
          }
          console.log("hello 6 ");
        }
        return user;
      },
    }),
  ],
});
