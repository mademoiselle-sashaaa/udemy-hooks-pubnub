import PubNub from 'pubnub';
import pubnubConfig from './pubnub.config';

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

function PubSub() {
    const pubnub = new PubNub(pubnubConfig);
    pubnub.subscribe({ channels: [MESSAGE_CHANNEL] });

    this.addListener = listnerConfig => {

        pubnub.addListener(listnerConfig);
    };

    this.publish = message => {
        console.log('Publish', message);
        pubnub.publish({
            message,
            channel: MESSAGE_CHANNEL
        })
    }
}

export default PubSub;
