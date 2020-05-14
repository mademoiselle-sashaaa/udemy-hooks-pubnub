import React from 'react';

function MessageReactions({ messageReactions }) {
    return (
        <>
            {messageReactions && messageReactions.map((reaction, index) => {
                const { id, emoji, username } = reaction;
                return (
                    <span key={id}>
                        <em>{username}:</em>
                        {emoji}
                        {index !== (messageReactions.length - 1) ? ', ' : null}
                    </span>
                )
            })}
        </>
    );
}

export default MessageReactions;
