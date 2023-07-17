import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

import { connectToDB } from '@/utils/database'

import User from '@/models/User'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '',
      clientSecret: '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      })

      session.user.id = sessionUser._id.toString()

      return session
    },

    async signIn({ profile }) {
      try {
        await connectToDB()

        const userExists = await User.findOne({
          email: profile.email,
        })

        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace('', '').toLowercase(),
            image: profile.picture,
          })
        }

        return true
      } catch (error) {
        console.log(error)
        return false
      }
    },
  },
}

export default NextAuth(authOptions)
