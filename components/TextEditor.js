import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Box, Container } from '@mui/system';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { grey } from '@mui/material/colors';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
// import { Editor } from "react-draft-wysiwyg";
const Editor = dynamic(() => import('react-draft-wysiwyg').then((module) => module.Editor),
    {
        ssr: false
    }
);
function TextEditor(props) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [snapshot] = useDocumentOnce(doc(db, 'userDoc', session.user.email, 'docs', router.query.id));
    // console.log(snapshot?.data());
    useEffect(() => {
        if (snapshot?.data()?.editorState) {
            setEditorState(EditorState.createWithContent(convertFromRaw(snapshot?.data()?.editorState)))
        }
    }, []);


    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
        const docRef = doc(db, 'userDoc', session.user.email, 'docs', router.query.id);
        setDoc(docRef, {
            editorState: convertToRaw(editorState.getCurrentContent())
        }, { merge: true })
    }
    return (
        <Container bgcolor={grey[100]} pb={16}>
            <Editor
                // toolbarClassName='flex sticky top-0 z-50 justify-center mx-auto'
                onEditorStateChange={onEditorStateChange}
            />
        </Container>
    );
}

export default TextEditor;