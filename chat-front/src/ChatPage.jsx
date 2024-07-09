import React from 'react';
import { PrettyChatWindow } from "react-chat-engine-pretty";

function ChatPage(props) {
  return (
    <div className='background'>
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  )
}

export default ChatPage