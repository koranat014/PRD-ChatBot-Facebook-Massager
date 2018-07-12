/* Handover_Prototocol_Reply */

'use strict';

//import API helper
const api = require('./api');

// Send a quick reply message
function sendQuickReply(psid, text, title, postback_payload) {
  
  console.log('SENDING QUICK REPLY');
  
  let payload = {};
  
  payload.recipient = {
    id: psid
  }

  payload.message = {
    text: text,
    quick_replies: [{
        content_type: 'text',
        title: title,
        payload: postback_payload
    }]    
  }

  api.call('/messages', payload, () => {});
}

module.exports = sendQuickReply;