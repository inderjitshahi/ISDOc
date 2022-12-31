import {
    Box, List, ListSubheader, IconButton, ListItemSecondaryAction, Link, ListItemButton, ListItem, ListItemText, ListItemIcon,
    DialogActions, DialogTitle, DialogContentText, Dialog, Draggable, DialogContent, Paper, Button,
} from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { getSession, useSession } from 'next-auth/react';
import FolderIcon from '@mui/icons-material/Folder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DescriptionIcon from '@mui/icons-material/Description';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import DeleteIcon from '@mui/icons-material/Delete';
function Docs({ email }) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [snapshot, setSnapshot] = useState();
    const router = useRouter();
    // const [snapshot] = useCollectionOnce(query(collection(db, 'userDoc', email, 'docs'), orderBy('timestamp', 'desc')));
    const collectionRef = collection(db, 'userDoc', email, 'docs');
    const q = query(collectionRef, orderBy('timestamp', 'desc'));
    onSnapshot(q, (querySnapshot) => {
        setSnapshot(querySnapshot.docs.map(doc => {
            // console.log(doc.data());
            return ({
                ...doc.data(), id: doc.id
            })
        }))
    });
    const handleDelete = (e, id) => {
        e.stopPropagation();
        setOpen(false);
        const docRef = doc(db, 'userDoc', email, 'docs', id);
        deleteDoc(docRef);
        router.push('/');
    }
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
                {snapshot?.map(doc =>
                    <ListItem

                        key={doc.id}
                        secondaryAction={
                            <Box display={'flex'} alignItems='center'>
                                <Box>{doc?.timestamp?.toDate().toLocaleDateString()}</Box>
                                <IconButton edge="end" aria-label="comments" onClick={handleClickOpen}>
                                    <DeleteIcon />
                                </IconButton>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                        {`Are You Sure to Delete ${doc.title}`}
                                    </DialogTitle>
                                    <DialogActions>
                                        <Button onClick={handleClose}>Cancel</Button>
                                        <Button onClick={e => handleDelete(e, doc?.id)} autoFocus>
                                            Delete
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Box>
                        }
                    >
                        <ListItemButton button component={Link} href={`/doc/${doc.id}`}>
                            <ListItemIcon>
                                <DescriptionIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText id="switch-list-label-wifi" primary={doc?.title} />
                        </ListItemButton>
                    </ListItem>
                )
                }
            </List>

        </Box>
    );
}

export default Docs;