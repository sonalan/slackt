import React from 'react'
import styled from 'styled-components';


import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"

export default function Chat() {
    return (
        <ChatContainer>
            <>
            <ChatHeader>
                <HeaderLeft>
                    <h4>#Room Name</h4>
                    <StarBorderOutlinedIcon/>
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon/>
                        Details
                    </p>
                </HeaderRight>
            </ChatHeader>
            <ChatMessages>Mesajlar pambık gibi mesajlar</ChatMessages>

            
            </>
        </ChatContainer>
    )
}


const ChatContainer = styled.div`
    flex:0.7;
    flex-grow: 1;
    overflow-y:scroll;
    margin-top:60px;
`;

const ChatHeader = styled.div`
     display:flex;
     justify-content:space-between;
     padding:20px;
     border-bottom:1px solid lightgray;
`;

const HeaderLeft =  styled.div`
    display:flex;
    justify-content:center;

    > h4 {
        display:flex;
        text-transform:lowercase;
        margin-left:10px;
    }

    > h4 > .MuiSvgIcon-root{
        margin-left:10px;
        font-size: 18px;
    }
`;
const HeaderRight =  styled.div`
    > p{
        display:flex;
        justify-content:center;
        font-size:14px
    }

    > p > .MuiSvgIcon-root{
        margin-right:10px;
        font-size: 16px;
    }
`;

const ChatMessages = styled.div``;