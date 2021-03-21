import React from 'react'
import styled from 'styled-components';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

export default function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Slackt Chat</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Sinan Onalan
                    </h3>
                </SidebarInfo>
                <CreateIcon/>
            </SidebarHeader>
        </SidebarContainer>
    )
}


const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: #ffffff;
    flex: 0.3; 
    border:1px solid #49274b;
    margin-top:60px;
`
const SidebarHeader = styled.div`
    display:flex;
    border-bottom:1px solid #49274b;
    padding:13px;
    padding-bottom:10px;
    
    > .MuiSvgIcon-root{
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: #ffffff;
        border-radius:999px;
    }

`
const SidebarInfo = styled.div`
    flex:1;
    > h2{
        font-size:15px;
        font-weight:900;
        margin-bottom:5px;
    }

    > h3{
        display:flex;
        font-size:13px;
        font-weight:400;
        align-items:center;
    }

    > h3 >  .MuiSvgIcon-root{
        font-size: 14px;
        margin-top:1px;
        margin-right:2px;
        color:green;
    }
`