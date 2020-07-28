"use strict";

const AssistantV1 = require('ibm-watson/assistant/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
class WatsonController {

  connectWatson() {
    const assistant = new AssistantV1({
      authenticator: new IamAuthenticator({ apikey: 'w6kijQcO-cUFD2bDBoH7dpx69i-IRScsiDAhDrJCksvL' }),
      url: 'https://gateway.watsonplatform.net/assistant/api/',
      version: '2018-02-16'
    });

    assistant.message(
      {
        input: { text: "What's the weather?" },
        workspaceId: 'myworkspace1-e35e9b0e-711a-4e'
      })
      .then(response => {
        console.log(JSON.stringify(response.result, null, 2));
      })
      .catch(err => {
        console.log(err);
      });
  }

  list() {
    const textToSpeech = new TextToSpeechV1({
      authenticator: new IamAuthenticator({
        apikey: 'w6kijQcO-cUFD2bDBoH7dpx69i-IRScsiDAhDrJCksvL',
      }),
      url: 'https://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/08a8d127-8b94-4feb-bf4e-56de17732eb6',
      disableSslVerification: true,
    });

    const getVoiceParams = {
      voice: 'en-US_AllisonV3Voice',
    };

    textToSpeech.getVoice(getVoiceParams)
      .then(voice => {
        console.log(JSON.stringify(voice, null, 2));
      })
      .catch(err => {
        console.log('error:', err);
      });
  }
}

module.exports = WatsonController;