import nextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export default nextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: '2.0'
    })
  ]
})