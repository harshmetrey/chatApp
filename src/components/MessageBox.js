import { Box, Grid } from "@material-ui/core"
import { FiFile, FiMoreHorizontal } from "react-icons/fi"
import { BsCheck, BsCheckAll } from 'react-icons/bs'
import React from "react"

export default function MessageBox({ messageItems, activeChat }) {
    return (
        <div style={{ paddingLeft: '60px', paddingRight: '60px', overflow: 'hidden scroll', minHeight: '200px', maxHeight: '580px' }}>
            {messageItems.map((item, key) => {
                return (
                    <div style={{ clear: 'both' }}>
                        <div key={key} className={item.status === "receive" ? "float-left" : "float-right"}>
                            <Grid container spacing={1} alignItems="center">
                                <Grid item>
                                    {item.status === 'receive' && <div className="user-wrapper">
                                        <img alt="user_avatar" className="user-avatar" src={activeChat.avatar_url} />
                                    </div>}
                                </Grid>
                                {item.status === 'send' &&
                                    <Grid item>
                                        <span><FiMoreHorizontal /></span>
                                    </Grid>
                                }
                                <Grid item>
                                    <Box className={item.status === "receive" ? "ca-chat-left" : "ca-chat-right"} padding="20px">
                                        {item.file &&
                                            <Grid container>
                                                <Grid item>
                                                    <Box padding="8px" marginRight="20px" className="chat-file">
                                                        <FiFile />
                                                    </Box>
                                                </Grid>
                                                <Grid item>
                                                    <Box marginTop="5px">
                                                        {item.text}
                                                    </Box>
                                                    <Box marginTop="5px" className="text-white">
                                                    {item.fileSize}
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        }
                                        {item.fileText && 
                                        <Grid container justifyContent="flex-end">
                                            <Grid>
                                                {item.text}
                                            </Grid>
                                            <Box marginRight="20px" display="flex" alignItems="center" alignContent="center" className="text-primary">
                                            {item.fileText} <FiFile size="1.5em"/>
                                            </Box>
                                        </Grid>}
                                        {!item.file && !item.fileText  && item.text}
                                    </Box>
                                    <div className="text-muted" style={{ textAlign: 'right' }}>4 days ago</div>
                                </Grid>
                                {item.status === 'receive' && <Grid item><FiMoreHorizontal /></Grid>}
                                {item.type === 'delivered' && <Grid item><BsCheck /></Grid>}
                                {item.type === 'read' && <Grid item><BsCheckAll /></Grid>}
                            </Grid>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}