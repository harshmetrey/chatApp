import React, { createRef } from 'react'
import { Box, Grid } from '@material-ui/core'
import moment from 'moment'
import { FiDisc, FiMoreVertical, FiPaperclip } from 'react-icons/fi'


import InputArea from './InputArea'
import MessageBox from './MessageBox'

export default function ChatBox({ activeChat, handleChange }) {

  const messagesEndRef = createRef();

    return (
        <div className="chat-box___wrapper">
            <div className="chat-box--top-header">
                <Grid container alignItems="center">
                    <Grid item> 
                        <div className="user-wrapper">
                            {activeChat.is_online && <div className="is_online"></div>}
                            <img alt="user_avatar" className="user-avatar" src={activeChat.avatar_url} />
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <Box paddingTop="30px">
                            <Grid>
                                <Grid>
                                    <div className="user-title">{activeChat.user_name}</div>
                                </Grid>
                                <Grid>
                                    <span className="user-status">
                                        {activeChat.voice_note ?
                                            <React.Fragment>
                                                <FiDisc size="0.6rem" /> records voice message
                                            </React.Fragment>
                                            : moment(activeChat.status).startOf('hour').fromNow() === "Invalid date" ?
                                                activeChat.status : "last online " + moment(activeChat.status).startOf('hour').fromNow()
                                        }
                                    </span>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Box marginTop="20px" paddingRight="20px"> 
                        <Grid container spacing={2}>
                            <Grid item>
                                <div class="mat-round">
                                <FiPaperclip/>
                                </div>
                            </Grid>
                            <Grid item>
                                <div className="mat-round">
                                <FiMoreVertical/>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </div>
            <div className="ca-message-area-wrapper">
                <MessageBox
                    ref={messagesEndRef}
                    activeChat={activeChat}
                    messageItems={activeChat.chat_history}
                />
            </div>
            <InputArea handleChange={handleChange}/>
        </div>
    )
}