import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelContainer, ChannelListContainer } from './components';
import './App.css';

// initialize the chat
const apiKey = 'bcfhsfsy3vdh';

// create instance of stream chat
// call as function and pass in apiKey
const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer

        />
        <ChannelContainer

        />
      </Chat>
    </div>
  );
}

export default App;
