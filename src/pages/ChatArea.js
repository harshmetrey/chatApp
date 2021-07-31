import ChatList from '../components/ChatList'


import {FiChevronDown, FiPlus, FiSearch} from 'react-icons/fi'

export default function ChatArea ({data}) {
    return (
        <div className="ca-chat-area">
            <div className="chat-title-header">
            <h2>Chats</h2>
            <button className="ca-btn ca-btn-primary align-icon"> <FiPlus/> Create new Chat</button>
            </div>
            <span className="text-muted align-icon-arrow"> Recent Chats <FiChevronDown/></span>
            <div className="ca-search-area">
                <div className="search-wrapper align-icon">
                    <FiSearch size="1.2rem" color="#707C97"/>
                    <input type="input" placeholder="Search" className="serach-input"/>
                </div>
                <div className="message-filter align-icon-arrow">
                    Messages <FiChevronDown/>
                </div>
            </div> 
            <div className="Chat-list__container">
                    <ChatList 
                        data={data}
                    />
            </div>
        </div>
    )
}