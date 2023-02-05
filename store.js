import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store ={
  _state : {
    profilePage:{
      posts : [
        { id: 1, message: 'Hi, how are you?',  like:10},
        { id: 2, message: 'Its my first post.', like:5 },
      
      ],
      newPostText:'it-kamasutra.com'
    },
    dialogsPage:{
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
    },
    sidebar:[
      { id: 1, name: 'Dima' },
      { id: 2, name: 'Liza' },
      { id: 3, name: 'Roma' },
    ]
  },
  getState (){
    return this._state;
  },
  _callSubscriber() {
    console.log('State changed');
  },
  subscribe  (observer)  {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);

  }
}

export default store;
window.store = store;