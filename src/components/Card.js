import React from "react"

import moment from "moment"

import { Box, Grid } from '@material-ui/core'

import { FiDisc, FiFile, FiImage, FiMic } from 'react-icons/fi'

export default function Card({ item, key }) {
    return (
        <div className="ca-card__container">
            <div className="ca-card-body">
                <Grid container>
                    <Grid item>
                        <div className="user-wrapper">
                            {item.is_online && <div className="is_online"></div>}
                            <img alt="user_avatar" className="user-avatar" src={item.avatar_url} />
                        </div>
                    </Grid>
                    <Grid item xs={7}>
                        <Box paddingTop="30px">
                            <Grid>
                                <Grid>
                                    <div className="user-title">{item.user_name}</div>
                                </Grid>
                                <Grid>
                                    <span className="user-status">
                                        {item.voice_note ?
                                            <React.Fragment>
                                                <FiDisc size="0.6rem" /> records voice message
                                            </React.Fragment>
                                            : moment(item.status).startOf('hour').fromNow() === "Invalid date" ?
                                                item.status : "last online " + moment(item.status).startOf('hour').fromNow()
                                        }
                                    </span>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box paddingTop="25px" className="text-muted">
                            {moment(item.last_modified).startOf('hour').fromNow()}
                        </Box>
                    </Grid>
                </Grid>
                <Grid>
                    {item.voice_note ?
                        <Grid>
                            <Grid container alignItems="center">
                                <Grid item xs={10}>
                                    <Box padding="30px" className="text-muted">
                                        <FiMic size="0.7rem" /> Voice Message (1:15)
                                    </Box>
                                </Grid>
                                <Grid item>
                                    {item.unread_count && <div className="read-count">{item.unread_count}</div>}
                                </Grid>
                            </Grid>
                            <Box paddingLeft="30px">
                                <Grid container>
                                    <Grid item xs={3}>
                                        <div background="blue" className="attachments">
                                            <FiFile /> Files (x2)
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <div background="pink" className="attachments">
                                            <FiImage /> Photo
                                        </div>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        :
                        <Grid container alignItems="center">
                            <Grid item xs={10}>
                                <Box className="text-muted font16" padding="30px">{item.last_message}</Box>
                            </Grid>
                            <Grid item>
                                {item.unread_count && <div className="read-count">{item.unread_count}</div>}
                            </Grid>
                        </Grid>
                    }
                </Grid>
            </div>
        </div>
    )
}