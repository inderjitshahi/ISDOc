import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Start from '../components/Start'
import { Container, Box } from '@mui/material'
import Docs from '../components/Docs'
import { getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import Login from '../components/Login'
export default function Home(props) {
  const { data: session, status } = useSession()
  if (status === 'loading') return <Box fontSize={20}>Loading...</Box>
  if (status !== "authenticated") return <Login />;
  return (
    <>
      <Header image={session?.user?.image} />
      <Container maxWidth='md'>
        <Start email={session?.user?.email} />
        <Docs email={session?.user?.email} />
      </Container>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
      props: { session, }
  }
}
