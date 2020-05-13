import React from 'react';
import CreateReaction from './CreateReation';
import { useAppContext } from './hooks'

function MessageBoard() {
    const { state: { messages } } = useAppContext();
    return (
        <div>
            {messages.map(item => {
                const { id, text, username, timestamp } = item;
                return (
                    <div key={id}>
                        <h4>{new Date(timestamp).toLocaleString()}</h4>
                        <p>{text}</p>
                        <p>- {username}</p>
                        <CreateReaction />
                        <hr />
                    </div>
                )
            })}
        </div>
    );
}

export default MessageBoard;
