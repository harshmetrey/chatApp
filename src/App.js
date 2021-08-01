
import { Sidebar } from './components/Sidebar'
import './assets/styles/style.css'
import ChatArea from './pages/ChatArea'
import ChatBox from './components/ChatBox'

import { chatData } from './data'
import { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'

function App() {

  const [activeChat, setActiveChat] = useState(null);
  const [data, setData] = useState(null);


  useEffect(() => {
      setData(chatData)
  }, [])

  const handleActiveChat = (item) => {
    setActiveChat(item)
  }

  const handleChange = (item) => {    
    const updatedChat = {...activeChat}

    const sendChat = {
       id: updatedChat.chat_history.length + 1,
       type: 'delivered',
       status: 'send' ,
       text: item
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
        <Grid style={{marginLeft: "50px"}} item xs={6}>
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
