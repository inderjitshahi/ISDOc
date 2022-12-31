import React from 'react';
import { signIn } from "next-auth/react"
import { Button, Container, Box } from '@mui/material';
function Login(props) {
    return (
        <Container>
            <Box display={'flex'} alignItems='center' justifyContent={'center'} minHeight='100vh'>
                <Button variant="contained" onClick={signIn}>Sign In with Google</Button>
            </Box>
        </Container>
    );
}

export default Login;