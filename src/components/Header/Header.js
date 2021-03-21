import React from 'react'
import styled from 'styled-components';
import {Avatar} from '@material-ui/core'

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


export default function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar 
                    
                />
                <AccessTimeIcon />
            </HeaderLeft>
            <HeaderSearch>
                <SearchIcon />
                <SearchInput />
            </HeaderSearch>
            <HeaderRight >
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div` 
    display:flex;
    position:fixed;
    width:100%;
    align-items:center;
    justify-content: space-between;
    padding:10px 0;
    background-color: var(--slack-color);
    color: #ffffff;
`

const HeaderLeft = styled.div`
    flex:0.3;
    display:flex;
    align-items:center;
    margin-left:20px;
    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 30px;

    }

`

const HeaderAvatar = styled(Avatar)` 
   cursor:pointer;
   :hover{
        opacity: 0.8; 
   }
`

const HeaderSearch = styled.div`
    flex:0.4;
    display:flex;
    align-items:center;
    display:flex;
    border-radius:6px;
    padding:0 50px;
    border: 1px solid gray;
    background-color: #421f44;
    
`

const SearchInput = styled.input`
    flex:0.8;
    border-radius:20px;
    height:30px;
    line-height:30px;
    background-color:transparent;
    border:none;
    text-align:center;
    min-width:30vw;
    outline:none;
    color:#efefef;

    
`

const HeaderRight= styled.div`
    flex:0.3;
    display:flex;
    align-items:flex-end;
    text-align:right;

    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 20px;

    }

`

