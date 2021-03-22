import React from 'react'
import styled from 'styled-components';
import { Button } from '@material-ui/core';

 

function ChatInput() {

    const sendMessage = e=>{
        e.preventDefault();
    }
  return (
    <ChatInputContainer>
      <form>
            <input placeholder={`Message to #Room`} />
            <Button hidden type="submit" onClick={sendMessage}>
                SEND
            </Button>
      </form>
    </ChatInputContainer>
  )
}

const ChatInputContainer = styled.div``;

export default ChatInput
