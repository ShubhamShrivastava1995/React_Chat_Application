import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';

function SidebarChat({addNewChat}) {

const createChat = () => {
    const roomName = prompt("Please Enter Name for Chat");
    if(roomName)
    {
        //do some stuff...
    }
};
    return !addNewChat ? (
        <div className='sidebarChat'>
           <Avatar/>
           <div classname="sidebar_info">
              <h2>room name </h2> 
              <p>last message...</p>
               </div>
        </div>
    ):
    <div onClick={createChat} className="sidebarChat">
    <h3 className="add-new-chat-title">Add New Chat</h3>
</div>
    }

export default SidebarChat
