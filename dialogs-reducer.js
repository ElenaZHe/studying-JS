const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState ={
    dialogs : [
      { id: 1, name: 'Dima' },
      { id: 2, name: 'Liza' },
      { id: 3, name: 'Roma' },
      { id: 4, name: 'Misha' },
      { id: 5, name: 'Andrey' }
    ],
    messages : [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Yo' },
      { id: 4, message: 'Hi' }
    ],
    newMessageBody: ''
  };

const dialogsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
          return{
            ...state,
            newMessageBody: action.body
          };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
              ...state,
              newMessageBody: '',
              messages: [...state.messages, { id: 5, message: body}]
            };
        default:
            return state;
        }
    }
export const sendMessageCreator =()=>({type: 'SEND-MESSAGE'})
export const updateNewMessageBodyCreator =(body) => 
({type: 'UPDATE-NEW-MESSAGE-BODY', body: body})
     
export default dialogsReducer;