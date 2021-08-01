let current = new Date()

export const chatData = [
    {
        userid: 1,
        avatar_url: "https://gravatar.com/avatar/c6701b5f63bb9a8e37f64d9a3214a71f?s=400&d=robohash&r=x",
        user_name: 'Luy Robin',
        chat_history: 
        [{
            id: 1,
            text: 'hello',
            status: "receive" 
        },
        {
            id: 2,
            text: 'Hi',
            status: "receive" 
        },
        {
            id: 3,
            text: 'hello',
            status: "send" 
        },
        {
            id: 4,
            text: 'Hi',
            status: "receive" 
        }
    ],
        voice_note: false,
        unread_count: 2,
        last_message: "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).",
        last_modified: current.toLocaleString(),
        status: '...writes',
        is_online: true
    },
    {
        userid: 2,
        avatar_url: "https://gravatar.com/avatar/c6701b5f63bb9a8e37f64d9a3214a71f?s=400&d=robohash&r=x",
        user_name: 'Nika Doe',
        chat_history: 
        [{
            id: 1,
            text: 'Hey',
            status: "send",
            type: 'read' 
        },
        {
            id: 2,
            text: 'Sup',
            status: "receive", 
        }],
        voice_note : true,
        is_online: true,
        unread_count: 1,
        last_message: false,
        last_modified: current.toLocaleString(),
        status: current.toLocaleString()
    },
    {
        userid: 3,
        avatar_url: "https://gravatar.com/avatar/c6701b5f63bb9a8e37f64d9a3214a71f?s=400&d=robohash&r=x",
        user_name: 'Joe Doe',
        chat_history: 
        [{
            id: 1,
            text: 'Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.',
            status: "receive",
        },
        {
            id: 2,
            text: 'Hey! Okay, send out.',
            status: "send", 
            type: 'read' 
        },{
            id: 3,
            text: 'Style.zip',
            file: true,
            status: "receive",
            fileSize: '41.36 Mb'
        },
        {
            id: 4,
            text: 'Hello! I tweaked everything you asked. I am sending the finished file.',
            fileText: '(52.05 Mb) New_Style.zip ',
            status: 'send',
            type: 'delivery'
        }],
        voice_note: false,
        is_online: false,
        status: current.toLocaleString(),
        last_modified: current.toLocaleString(),
        last_message: "Cicero famously orated against his political opponent Lucius Sergius Catilina."
    }
]