import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Box, Container } from '@mui/system';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { grey } from '@mui/material/colors';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useRouter } from 'next/router';
import { useSession, getSession } from 'next-auth/react';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import _debounce from 'lodash/debounce';
const Editor = dynamic(() => import('react-draft-wysiwyg').then((module) => module.Editor),
    {
        ssr: false
    }
);


function TextEditor({ snapshot }) {

    const data = snapshot.data();
    const { data: session, status } = useSession();
    const router = useRouter();
    const [editorState, setEditorState] = useState(data?.editorState ? EditorState.createWithContent(convertFromRaw(data?.editorState)) : EditorState.createEmpty());
    const debouncedSave = (newEditorState) => {
        // Trigger auto-save logic here
        const docRef = doc(db, 'userDoc', session.user.email, 'docs', router.query.id);
        setDoc(
            docRef,
            {
                editorState: convertToRaw(newEditorState.getCurrentContent()),
            },
            { merge: true }
        );

        // Show a success notification
        toast.success('Auto Saved!', {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            debouncedSave(editorState);
        }, 4000);

        return () => {
            // Clear the timeout when the editor state changes
            clearTimeout(timeoutId);
        };
    }, [editorState]);

    const onEditorStateChange = (newEditorState) => {
        setEditorState(newEditorState);
    };

    return (
        <Container bgcolor={grey[100]} pb={16}>
            <Editor
                // toolbarClassName='flex sticky top-0 z-50 justify-center mx-auto'
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
            />
        </Container>
    );

}

export default TextEditor;