import React, { useState } from 'react';
import { Box, IconButton, Button, Modal, Typography, Input } from '@mui/material';
import { grey } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';
import Link from 'next/link';
import { db } from '../firebase'
import { addDoc, collection, doc, orderBy, query, serverTimestamp } from '@firebase/firestore';
function Start({ email }) {
    const [title, setTitle] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);;
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const createDoc = async () => {
        if (title.trim().length === 0) {
            return;
        }
        const collectionRef = collection(db, 'userDoc', email, 'docs');
        addDoc(collectionRef, { title: title, timestamp: serverTimestamp() });
        setTitle('');
        setOpen(false);
    }
    return (
        <Box display={'flex'} flexDirection='column' gap={5}>
            <Box display={'flex'} justifyContent='space-between'>
                <Box color={grey[500]}>Start a new Document</Box>
                <MoreVertIcon />
            </Box>
            <Box display={'flex'} gap={2}>
                <Button>
                    <Box height={'10rem'} width={'10rem'} border={1} borderColor={grey[300]} position={'relative'} overflow='hidden' onClick={handleOpen} >
                        <Image
                            src='https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png'
                            fill
                            alt='add'
                        />
                    </Box>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style} display='flex' gap={5} borderRadius={2}>
                            <Input placeholder='Enter title' value={title} onChange={e => setTitle(e.target.value)}></Input>
                            <Box display={'flex'} gap={5}>
                                <Button variant='contained' onClick={createDoc}>create</Button>
                                <Button onClick={handleClose}>Cancel</Button>
                            </Box>
                        </Box>
                    </Modal>
                </Button>
            </Box>

        </Box>
    );
}

export default Start;