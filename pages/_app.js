import { SessionProvider } from "next-auth/react"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        {/* SEO Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ISDoc</title>
        <meta name="author" content="Inderjit Shahi" />
        <meta name="author" content="Author's Website" itemprop="https://inderjitshahi.vercel.app/"></meta>
        <meta name="description" content="ISDoc - An innovative online document editor created with Next.js, Firebase, and Material UI. Collaborative editing, rich text features, and a seamless user experience." />
        <meta name="keywords" content="ISDoc, online document editor, next.js, firebase, material ui, full stack application, rich text editor, collaboration, real-time editing" />
        <link rel="shortcut icon" href="/Logo_Circular.png" type="image/x-icon"></link>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="ISDoc" />
        <meta property="og:description" content="ISDoc - An innovative online document editor created with Next.js, Firebase, and Material UI. Collaborative editing, rich text features, and a seamless user experience." />
        <meta property="og:image" content="/poster.png" />
        <meta property="og:url" content="https://isdoc.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ISDoc" />
        <meta name="twitter:description" content="ISDoc - An innovative online document editor created with Next.js, Firebase, and Material UI. Collaborative editing, rich text features, and a seamless user experience." />
        <meta name="twitter:image" content="/poster.png" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </SessionProvider >
  )
}