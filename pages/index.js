import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Start from '../components/Start'
import { Container, Box } from '@mui/material'
import Docs from '../components/Docs'
import { getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Login from '../components/Login'

export default function Home(props) {
  const { data: session, status } = useSession()

  if (status === 'loading') return <Box fontSize={20}>Loading...</Box>
  if (status !== "authenticated") return <Login />;

  return (
    <>
      <Head>
        <title>Docs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo_Circular.png" />
      </Head>
      <Header image={session?.user?.image} />
      <Container maxWidth='md'>
        <Start email={session?.user?.email} />
        <Docs email={session?.user?.email} />
      </Container>
    </>
  )
}

// export async function getServerSidePros(context) {
//   const session = await getSession({ req: context.req });
//   if (!session) {
//     return {
//       redirect: {
//         destination: '/signin',
//         permanent: false,
//       }
//     }
//   }
//   console.log(session);
//   return {
//     props: { session },
//   }
// }