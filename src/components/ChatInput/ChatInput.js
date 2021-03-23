import React,{useState, useRef} from 'react'
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import {db} from '../../firebase';
import firebase from 'firebase';


 

function ChatInput({channelName, channelId}) {
    const inputRef = useRef(null)
    const [message, setMessage] = useState('')
    const sendMessage = e=>{
        e.preventDefault();
        if(!channelId) {
            return false;
        }
        console.log(channelId,message);
        db.collection('rooms').doc(channelId)
            .collection('messages')
            .add({
                message,
                userName:'Sinan Onalan',
                userPic:'',
                timeStamp:firebase.firestore.FieldValue.serverTimestamp(),
                isDeleted:false
            });

        setMessage('');
    }
  return (
    <ChatInputContainer>
      <form>
            <input 
                ref={inputRef} 
                value={message}
                onChange={(e)=>{ setMessage(e.target.value)}}
                placeholder={`Message to #Room`} 

            />
            <Button hidden type="submit" onClick={sendMessage}>
                SEND
            </Button>
      </form>
    </ChatInputContainer>
  )
}

const ChatInputContainer = styled.div`
    border-radius:20px;
    > form {
        position:relative;
        display:flex;
        justify-content:center;
    }

    > form > input{
        position:fixed;
        bottom:30px;
        width:60%;
        border:1px solid gray;
        border-radius:3px;
        padding:20px;
        outline:none;
    }

    > form > button >{
        display: none !important;
    }
`;

export default ChatInput
