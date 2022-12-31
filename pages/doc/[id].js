import React, { useContext, useEffect, useState } from 'react';
import { getSession, useSession } from 'next-auth/react'
import { Avatar, Box, Button } from '@mui/material';
import Login from '../../components/Login';
import DescriptionIcon from '@mui/icons-material/Description';
import { collection, doc, getDoc } from 'firebase/firestore';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';
import { useRouter } from 'next/router';
import { grey } from '@mui/material/colors';
import TextEditor from '../../components/TextEditor';
import Link from 'next/link';
function Doc(props) {
    const { data: session, status } = useSession();
    if (status === 'loading') return;
    const router = useRouter();
    const { id } = router.query;
    const [snapshot, loadingSnapshot] = useDocumentOnce(doc(db, 'userDoc', session.user.email, 'docs', id));
    if (!loadingSnapshot && !snapshot?.data()?.title) router.push('/');
    if (status !== 'authenticated') return <Login />
    return (
        <Box>
            <Box display={'flex'} justifyContent='space-between' borderBottom={2} borderColor={grey[300]}>
                <Box display={'flex'}>
                    <Link href="/">
                        <DescriptionIcon fontSize={'large'} color='primary' />
                    </Link>
                    <Box>
                        <Box fontSize={'large'} fontWeight='bold'>{snapshot?.data()?.title} </Box>
                        <Box display={'flex'} color={grey[600]}>
                            <Button>File</Button>
                            <Button>Edit</Button>
                            <Button>View</Button>
                            <Button>Insert</Button>
                            <Button>Tools</Button>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Avatar src={session.user.image}></Avatar>
                </Box>
            </Box>

            <Box>
                <Box>
                    <TextEditor />
                </Box>
            </Box>
        </Box>
    );
}

export default Doc;

export async function getServerSideProps(context) {
    const session = await getSession(context);
    console.log(session);
    return {
        props: { session, }
    }
}
