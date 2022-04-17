import {
    useState,
    useEffect,
} from 'react';


import './Messages.css';

import {
    SERVER_ADDRESS,
} from '../constants';



function Messages() {
    const writtenBy = window.location.pathname.replace('/', '');

    const [
        messages,
        setMessages,
    ] = useState([]);


    useEffect(() => {
        const load = async () => {
            const data = {
                writtenBy,
            };

            const request = await fetch(
                SERVER_ADDRESS + '/messages_json',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data),
                },
            );

            const messages = await request.json();
            setMessages(messages);
        }

        load();
    }, []);

    return (
        <div className="App">
            <div
                onClick={() => {
                    window.location.href = '/new';
                }}
                className="new-message-button"
            >
                send new message
            </div>

            <h1>
                {writtenBy}'s messages
            </h1>

            {messages.map(message => {
                const {
                    id,
                    text,
                    writtenAt,
                    writtenBy,
                    writtenFrom,
                } = message;

                const writtenAtHumanFormat = new Date(writtenAt).toLocaleString();

                return (
                    <div
                        key={'message' + id}
                        className="message"
                    >
                        <div>
                            {writtenBy} - {writtenAtHumanFormat}
                        </div>

                        <div
                            className="message-text"
                        >
                            {text}
                        </div>

                        <div>
                            sent from {writtenFrom}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}


export default Messages;
