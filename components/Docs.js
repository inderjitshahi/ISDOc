import { Box, List, ListSubheader, IconButton, ListItemSecondaryAction, Link, ListItemButton, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router'
import FolderIcon from '@mui/icons-material/Folder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DescriptionIcon from '@mui/icons-material/Description';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
function Docs({ email }) {
    const router = useRouter();
    const [snapshot] = useCollectionOnce(query(collection(db, 'userDoc', email, 'docs'), orderBy('timestamp', 'desc')));
    return (
        <Box my={5} >
            <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                component="nav"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        <Box display={'flex'} justifyContent='space-between'>
                            <Box>My Documents</Box>
                            <Box display='flex' alignItems={'center'}>
                                <Box>Date Created</Box>
                                <IconButton><FolderIcon /></IconButton>
                            </Box>
                        </Box>
                    </ListSubheader>
                }
            >
                {snapshot?.docs?.map(doc =>
                    <ListItem
                        button component={Link} href={`/doc/${doc.id}`}
                        key={doc.id}
                        // onClick={router.push('/doc/sbdcsb')}
                        secondaryAction={
                            <Box display={'flex'} alignItems='center'>
                                <Box>{doc.data()?.timestamp?.toDate().toLocaleDateString()}</Box>
                                <IconButton edge="end" aria-label="comments">
                                    <MoreVertIcon />
                                </IconButton>
                            </Box>
                        }
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <DescriptionIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText id="switch-list-label-wifi" primary={doc.data()?.title} />
                        </ListItemButton>
                    </ListItem>
                )
                }
            </List>

        </Box>
    );
}

export default Docs;