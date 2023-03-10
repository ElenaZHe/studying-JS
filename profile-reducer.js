const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState ={
    posts : [
      { id: 1, message: 'Hi, how are you?',  like:10},
      { id: 2, message: 'Its my first post.', like:5 },
    
    ],
    newPostText:'it-kamasutra.com'
  };

const profileReducer = (state = initialState, action) =>{

    switch (action.type) {
        case ADD_POST: {
          let newPost= {
            id: 1,
            message: state.newPostText,
            like:0
          };
          return {
            ...state,
            posts:[...state.posts, newPost ],
            newPostText:''
          };
        }
          case UPDATE_NEW_POST_TEXT:{
             return{
               ...state,
               newPostText: action.newText
              }
        }
          default: 
          return state;
      }
    }
    
    

export const addPostActionCreator =()=>({type: 'ADD-POST'})
export const updateNewPostTextActionCreator =(text) => 
({type: 'UPDATE-NEW-POST-TEXT', newText: text})

export default profileReducer;