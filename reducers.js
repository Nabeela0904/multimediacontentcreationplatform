const initialState = {
    contentList: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CONTENT':
        return {
          ...state,
          contentList: [...state.contentList, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  