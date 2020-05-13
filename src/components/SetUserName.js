import React from 'react';
import { useAppContext } from './hooks';
import { setUserName } from '../state/actions';

function SetUsername() {
    const { dispatch, state: { username } } = useAppContext();

    const updateUserName = event => {
        dispatch(setUserName(event.target.value));
    }

    return (
        <div>
            <h3>User Name</h3>
            <input onChange={updateUserName} value={username} />
        </div>
    );
}

export default SetUsername;
