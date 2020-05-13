import { NEW_MESSAGE, SET_USERNAME } from './types';
import { v4 as uuidv4 } from 'uuid';

export const newMessage = ({ text, username }) => ({
    type: NEW_MESSAGE,
    item: { id: uuidv4(), text, username, timestamp: Date.now() }
});

export const setUserName = username => ({
    type: SET_USERNAME,
    username
});
