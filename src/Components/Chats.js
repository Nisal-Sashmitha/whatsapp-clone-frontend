import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import '../Css/Chats.css';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chats() {
  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar/>
        <div className="chat__headerInfo">
            <h3>Room name</h3>
            <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <IconButton>
                <AttachFileIcon/>
            </IconButton>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>

        </div>
      </div>

      <div className="chat__body">
        <p className='chat_message'>
            <span className='chat__name'>
                Sonny
            </span>
            This is a message baaaaaaaaaaaaaaaaaaaan a
            <span className="chat__timestamp">
                {new Date()
                .toUTCString()}
            </span>
        </p>
        <p className='chat_message chat_reciever'>
            <span className='chat__name'>
                Sonny
            </span>
            This is a message
            <span className="chat__timestamp">
                {new Date()
                .toUTCString()}
            </span>
        </p>

        <p className='chat_message'>
            <span className='chat__name'>
                Sonny
            </span>
            This is a message
            <span className="chat__timestamp">
                {new Date()
                .toUTCString()}
            </span>
        </p>

      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon/>    
        </IconButton>
        <form>
          <input placeholder='Type a message'
          type = 'text'
          />
          <button
          type="submit"
          > send a message</button>
        </form>
        <MicIcon/>
        
      </div>
    </div>
  )
}

export default Chats
