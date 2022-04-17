import {
    useState,
} from 'react';

import './NewMessage.css';



function NewMessage() {
    const [
        text,
        setText,
    ] = useState('');

    const [
        writtenBy,
        setWrittenBy,
    ] = useState('');

    const [
        writtenFrom,
        setWrittenFrom,
    ] = useState('');


    const send = async () => {
        if (
            !text
            || !writtenBy
            || !writtenFrom
        ) {
            return;
        }

        const data = {
            text,
            writtenBy,
            writtenFrom,
        };

        await fetch(
            'http://localhost:8080/message',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            },
        );

        setText('');
        setWrittenBy('');
        setWrittenFrom('');
    }


    return (
        <div
            className="new-message"
        >
            <h1>
                new message
            </h1>

            <div
                className="new-message-inputs"
            >
                <input
                    value={text}
                    placeholder="text"
                    onChange={(
                        event
                    ) => {
                        setText(event.target.value);
                    }}
                    className="new-input"
                />

                <input
                    value={writtenBy}
                    placeholder="written by"
                    onChange={(
                        event
                    ) => {
                        setWrittenBy(event.target.value);
                    }}
                    className="new-input"
                />

                <input
                    value={writtenFrom}
                    placeholder="written from"
                    onChange={(
                        event
                    ) => {
                        setWrittenFrom(event.target.value);
                    }}
                    className="new-input"
                />

                <button
                    className="new-button"
                    onClick={() => {
                        send();
                    }}
                >
                    SEND
                </button>
            </div>
        </div>
    );
}


export default NewMessage;
