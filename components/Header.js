import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import DescriptionIcon from '@mui/icons-material/Description';
import { Avatar, Box, Container, InputBase } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { purple, red, pink, grey } from '@mui/material/colors';
import AppsIcon from '@mui/icons-material/Apps';
import { display } from '@mui/system';
import { signOut } from 'next-auth/react';
// backgroundColor={pink[600]}
function Header({image}) {
    return (
        <Box boxShadow={3} display='flex' mb={2} py={1} px={2} gap={2} justifyContent='space-between' alignItems='center' backgroundColor={'white'} >
            <Box display={'flex'}>
                <IconButton>
                    <MenuIcon fontSize="md" color='primary' />
                </IconButton>
                <IconButton >
                    <DescriptionIcon fontSize="md" color='primary' />Docs
                </IconButton>
            </Box>
            <Box backgroundColor={grey[100]} borderRadius={10} display='flex' gap={1} alignItems='center' p={.5} flexGrow={.5}>
                <SearchIcon />
                <InputBase placeholder='search' />
            </Box>
            <Box display={'flex'} gap={1}
            >
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <Avatar alt='Docs' src={image} onClick={signOut} />
                </IconButton>
            </Box>
        </Box>
    );
}

export default Header;