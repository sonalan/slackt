import React from 'react'
import styled from 'styled-components';

export default function SidebarOption({Icon,title,doAction,id}) {

    const clickHandler = ()=> {
        //console.log(Icon,title,doAction,id);
        if(id && doAction){
            doAction(id);
        }
        else if(doAction){
            doAction()
        }
    }
    return (
        <SidebarOptionContainer
            onClick={ clickHandler }
        >
            
            {Icon&&<Icon fontSize='small'  style={{ padding:10}}/>}
            {Icon? 
                <h3>{title}</h3>
                :
                <SidebarOptionChannel>
                    <span>#</span> {title}
                </SidebarOptionChannel>
            }
        </SidebarOptionContainer>
    )
}


const SidebarOptionContainer = styled.div`
     display:flex;
     font-size:12px;
     align-items:center;
     padding-left:2px;
     cursor: pointer;
     :hover{
         opacity: 0.8;
         background-color: #340e36;
     }

     > h3{
        font-weight:500;
     }

     > h3 > span{
           padding:15px;
     }
`;

const SidebarOptionChannel = styled.h3`
     padding:10px 0;
     font-weight:300;
`;