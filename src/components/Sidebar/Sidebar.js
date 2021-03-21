import React from 'react'
import styled from 'styled-components';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Slackt Chat</h2>
                    <h3>
                        <FiberManualRecordIcon />
                    </h3>
                </SidebarInfo>
            </SidebarHeader>
        </SidebarContainer>
    )
}


const SidebarContainer = styled.div``
const SidebarHeader = styled.div``
const SidebarInfo = styled.div``