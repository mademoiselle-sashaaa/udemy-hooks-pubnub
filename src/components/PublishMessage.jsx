import React, { useState } from 'react';
import { newMessage } from '../state/actions';
import { useAppContext } from './hooks';

function PublishMessage() {
    const { dispatch } = useAppContext();

    const [text, setText] = useState('');

    const updateText = event => {
        setText(event.target.value);
    };

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            publishMessage();
        }
    };

    const publishMessage = () => {
        dispatch(newMessage(text));
    };

    return (
        <div>
            <h3>Got something to say?</h3>
            <input value={text} onChange={updateText} onKeyPress={handleKeyPress} /> {' '}
            <button onClick={publishMessage}>Publish it!</button>
        </div>
    );
}

export default PublishMessage;
