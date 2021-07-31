
import { Sidebar } from './components/Sidebar'
import './assets/styles/style.css'
import ChatArea from './pages/ChatArea'

import {chatData} from './data'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="ca-chat-messageList">
        <ChatArea data={chatData} />
      </div>
      <div className="ca-chat-box">

      </div>
    </div>
  );
}

export default App;
