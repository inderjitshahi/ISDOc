import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import { FirestoreAdapter } from "@next-auth/firebase-adapter"
import { db } from "../../../firebase";
// import firebaseConfig from "../../../firebaseConfig";
import {firebaseConfig} from '../../../firebase'
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
    // https://next-auth.js.org/providers
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    adapter: FirestoreAdapter(firebaseConfig),
    secret:process.env.NEXTAUTH_SECRET,
    // ...
});