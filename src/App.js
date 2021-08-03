
import { Sidebar } from './components/Sidebar'
import './assets/styles/style.css'
import ChatArea from './pages/ChatArea'
import ChatBox from './components/ChatBox'

import { chatData } from './data'
import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import moment from 'moment'

function App() {

  const [activeChat, setActiveChat] = useState(chatData[2]);
  const [data, setData] = useState(null);


  useEffect(() => {
    setData(chatData)
  }, [])

  const handleActiveChat = (item) => {
    setActiveChat(item)
  }

  const handleChange = (item) => {

    const updatedChat = { ...activeChat }

    let sendChat = {}

    updatedChat.status = new Date().toISOString();

    const isToday = updatedChat.chat_history.findIndex(item => item.created_on === moment().format('L'));

    if (isToday === -1) {
      sendChat = {
        id: updatedChat.chat_history.length + 1,
        type: 'delivered',
        status: 'send',
        text: item,
        created_on: moment().format('L'),
        time: moment().format(),
        isFirst: true
      }
    } else {
      sendChat = {
        id: updatedChat.chat_history.length + 1,
        type: 'delivered',
        status: 'send',
        text: item,
        time: moment().format(),
        created_on: moment().format('L'),
      }
    }

    updatedChat.chat_history = [...updatedChat.chat_history, sendChat]

    const removeDup = data.filter(item => item.userid !== updatedChat.userid)
    const index = data.findIndex(item => item.userid === updatedChat.userid);
    removeDup.splice(index, 0, updatedChat)
    setActiveChat(updatedChat);
    setData(removeDup);

  }
  return (
    <div className="App">
      <Sidebar />
      <Grid container className="ca-dashboard">
        <Grid item xs={5}>
          <ChatArea data={data} handleActiveChat={handleActiveChat} />
        </Grid>
        <Grid style={{ marginLeft: "50px" }} item xs={6}>
          {activeChat &&
            <ChatBox
              activeChat={activeChat}
              handleChange={handleChange}
            />
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
