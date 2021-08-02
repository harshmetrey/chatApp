import Avatar1 from '../src/assets/images/24.png'
import Avatar2 from '../src/assets/images/241.png'
import Avatar3 from '../src/assets/images/242.png'
import Avatar4 from '../src/assets/images/243.png'



export const chatData = [
    {
        userid: 1,
        avatar_url: Avatar1,
        user_name: 'Luy Robin',
        chat_history:
            [{
                id: 1,
                text: 'Hey, How are you?',
                status: "receive",
                created_on: '02/08/2021, 15:53:57',
                time: '02/08/2021, 15:53:57',
                isFirst: true
            },
            {
                id: 2,
                text: 'simply dummy text of the printing and typesetting industry.',
                status: "receive",
                created_on: '02/08/2021, 15:53:57',
                time: '02/08/2021, 15:53:57'
            },
            {
                id: 3,
                text: 'it look like readable English',
                status: "send",
                created_on: '02/08/2021, 15:53:57',
                time: '02/08/2021, 15:53:57'
            },
            {
                id: 4,
                text: "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).",
                status: "receive",
                created_on: '02/08/2021, 15:53:57',
                time: '02/08/2021, 15:53:57'
            }
            ],
        voice_note: false,
        unread_count: 2,
        last_message: "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).",
        last_modified: '02/08/2021, 15:53:57',
        status: '...writes',
        is_online: true
    },
    {
        userid: 2,
        avatar_url: Avatar2,
        user_name: 'Nika Doe',
        chat_history:
            [{
                id: 1,
                text: 'Hey',
                status: "send",
                type: 'read',
                created_on: '07/28/2021, 15:53:57',
                time: '07/28/2021, 15:53:57',
                isFirst: true
            },
            {
                id: 2,
                text: 'Voice Message (1:15)',
                status: "receive",
                created_on: '07/28/2021, 15:53:57',
                time: '07/28/2021, 15:53:57',
    
            }],
        voice_note: true,
        is_online: true,
        unread_count: 1,
        last_message: false,
        last_modified: '02/08/2021, 15:53:57',
        status: '02/08/2021, 15:53:57'
    },
    {
        userid: 3,
        avatar_url: Avatar3,
        user_name: 'Joe Doe',
        chat_history:
            [{
                id: 1,
                text: 'Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.',
                status: "receive",
                created_on: '07/29/2021, 15:53:57',
                time: '07/29/2021, 15:53:57',

                isFirst: true

            },
            {
                id: 2,
                text: 'Hey! Okay, send out.',
                status: "send",
                type: 'read',
                created_on: '07/29/2021, 15:53:57',
                time: '07/29/2021, 15:53:57',

            }, {
                id: 3,
                text: 'Style.zip',
                file: true,
                status: "receive",
                fileSize: '41.36 Mb',
                created_on: '07/29/2021, 15:53:57',
                time: '07/29/2021, 15:53:57',

            },
            {
                id: 4,
                text: 'Hello! I tweaked everything you asked. I am sending the finished file.',
                fileText: '(52.05 Mb) New_Style.zip ',
                status: 'send',
                type: 'delivered',
                created_on: '07/30/2021, 15:53:57',
                time: '07/30/2021, 15:53:57',
                isFirst: true

            }],
        voice_note: false,
        is_online: false,
        status: '07/30/2021, 15:53:57',
        last_modified: '07/30/2021, 15:53:57',
        last_message: "Cicero famously orated against his political opponent Lucius Sergius Catilina."
    },
    {
        userid: 4,
        avatar_url: Avatar4,
        user_name: 'Luy Robin',
        chat_history:
            [{
                id: 1,
                text: 'hello',
                status: "receive",
                created_on: '02/08/2021, 15:53:57',
                time: '02/08/2021, 15:53:57',
                isFirst: true
            },
            {
                id: 2,
                text: 'Hi',
                status: "receive",
                created_on: '02/08/2021, 15:53:57',
                time: '02/08/2021, 15:53:57'
            },
            {
                id: 3,
                text: 'hello',
                status: "send",
                created_on: '02/08/2021, 15:53:57',
                time: '02/08/2021, 15:53:57'
            },
            {
                id: 4,
                text: 'Hi',
                status: "receive",
                created_on: '02/08/2021, 15:53:57',
                time: '02/08/2021, 15:53:57'
            }
            ],
        voice_note: false,
        unread_count: 1,
        last_message: "There are many variations of passages of Lorem Ipsum available,",
        last_modified: '02/08/2021, 15:53:57',
        status: '07/30/2021, 15:53:57',
        is_online: true
    },
]